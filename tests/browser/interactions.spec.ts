import { expect, test } from "@playwright/test";

test("home hero navbar transitions without changing the shared navbar layout", async ({ page }) => {
  const consoleErrors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });

  const readNavbarSnapshot = async () => {
    const navbar = page.locator('[data-slot="navbar"]');
    const logo = navbar.locator('[data-slot="logo"]');
    const search = page.getByLabel("Search documentation");
    const themeToggle = page.locator('[aria-label="Color theme"]');
    const github = navbar.getByRole("link", { name: "GitHub repository" });
    const getStarted = navbar.getByRole("link", { name: "Get Started" });

    await expect(search).toBeVisible();
    await expect(themeToggle).toBeVisible();
    await expect(github).toBeVisible();
    await expect(getStarted).toHaveAttribute("href", "/docs");
    await expect(getStarted).not.toHaveAttribute("target", "_blank");
    await expect(getStarted).toHaveAttribute("data-variant", "default");

    await expect
      .poll(() =>
        Promise.all(
          [navbar, logo, search, themeToggle, github, getStarted].map((locator) =>
            locator.evaluate((element) => element.getBoundingClientRect().height > 0),
          ),
        ),
      )
      .toEqual([true, true, true, true, true, true]);

    const measurements = await Promise.all(
      [navbar, logo, search, themeToggle, github, getStarted].map((locator) =>
        locator.evaluate((element) => {
          const bounds = element.getBoundingClientRect();
          return { height: Math.round(bounds.height), left: Math.round(bounds.left) };
        }),
      ),
    );
    expect(measurements[4].left).toBeLessThan(measurements[5].left);
    expect(measurements.slice(2).map(({ height }) => height)).toEqual([32, 32, 32, 32]);

    return {
      actionHeights: measurements.slice(2).map(({ height }) => height),
      logoHeight: measurements[1].height,
      navbarHeight: measurements[0].height,
    };
  };

  await page.goto("/");
  const navbar = page.locator('[data-slot="navbar"]');
  const homeNavbar = await readNavbarSnapshot();

  await expect(navbar).toHaveAttribute("data-variant", "transparent");
  await expect(navbar).not.toHaveAttribute("data-sticky");
  await expect
    .poll(() =>
      navbar.evaluate((element) => ({
        backgroundColor: getComputedStyle(element).backgroundColor,
        position: getComputedStyle(element).position,
      })),
    )
    .toEqual({ backgroundColor: "rgba(0, 0, 0, 0)", position: "absolute" });
  await expect
    .poll(() =>
      page.evaluate(
        () =>
          Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) <=
          window.innerHeight + 1,
      ),
    )
    .toBe(true);

  const search = page.getByLabel("Search documentation");

  await search.click();
  const palette = page.getByRole("dialog", { name: "Command Palette" });
  await expect(palette).toBeVisible();
  await expect
    .poll(() => palette.evaluate((element) => getComputedStyle(element).animationName))
    .toContain("poyraz-command-in");

  await expect
    .poll(() =>
      palette.evaluate((element) => {
        const bounds = element.getBoundingClientRect();
        return Math.round(bounds.left + bounds.width / 2);
      }),
    )
    .toBe(Math.round((page.viewportSize()?.width ?? 0) / 2));

  await page.keyboard.press("Escape");

  await page.evaluate(() => {
    document.body.style.minHeight = "200vh";
    window.scrollTo(0, 128);
  });
  await expect(navbar).toHaveAttribute("data-variant", "minimal");
  await expect
    .poll(() =>
      navbar.evaluate((element) => ({
        hasBackground: getComputedStyle(element).backgroundColor !== "rgba(0, 0, 0, 0)",
        position: getComputedStyle(element).position,
      })),
    )
    .toEqual({ hasBackground: true, position: "fixed" });

  await page.goto("/docs");
  const docsNavbar = await readNavbarSnapshot();

  await expect(page.locator('[data-slot="navbar"]')).toHaveAttribute("data-sticky", "");
  await expect(page.locator('[data-slot="navbar"]')).toHaveAttribute("data-variant", "minimal");
  expect(docsNavbar).toEqual(homeNavbar);

  expect(
    consoleErrors.filter(
      (message) => message.includes("same key") || message.includes("Encountered two children"),
    ),
  ).toEqual([]);
});

test("hero component conveyor loops left and pauses as one unit", async ({ page }) => {
  await page.goto("/");

  const showcase = page.locator(".poyraz-hero-showcase");
  const tracks = showcase.locator(".poyraz-hero-marquee-track");
  const viewport = showcase.locator(".poyraz-hero-marquee-viewport").first();
  const edge = showcase.locator(".poyraz-hero-marquee-edge-start").first();

  await expect(showcase).toBeVisible();
  await expect(tracks).toHaveCount(6);
  await expect(showcase.locator(".poyraz-hero-marquee-edge-start")).toHaveCount(6);
  await expect(showcase.locator(".poyraz-hero-marquee-edge-end")).toHaveCount(0);

  await expect
    .poll(() =>
      showcase.evaluate((element) => {
        const bounds = element.getBoundingClientRect();
        const section = element.closest("section")?.getBoundingClientRect();
        if (!section) throw new Error("Hero section was not found");
        return {
          centered:
            Math.abs(bounds.top + bounds.height / 2 - (section.top + section.height / 2)) < 1,
          reachesRightEdge: Math.abs(window.innerWidth - bounds.right) < 1,
          usesViewportHeight: bounds.height >= window.innerHeight * 0.8,
        };
      }),
    )
    .toEqual({ centered: true, reachesRightEdge: true, usesViewportHeight: true });

  const componentNames = await showcase
    .locator("[data-hero-component]")
    .evaluateAll((elements) =>
      elements.map((element) => element.getAttribute("data-hero-component")),
    );
  expect(new Set(componentNames).size).toBe(39);

  await expect(showcase.locator('[data-hero-component="Card"] [data-slot="card"]')).toHaveCount(2);
  await expect(showcase.locator('[data-hero-component="Input"] [data-slot="input"]')).toHaveCount(
    2,
  );
  await expect(showcase.locator('[data-hero-component="Button"] button[data-variant]')).toHaveCount(
    2,
  );
  await expect(
    showcase.locator('[data-hero-component="Date Picker"] [data-slot="date-picker"]'),
  ).toHaveCount(2);
  await expect(
    showcase.locator('[data-hero-component="Date Picker"] button[data-variant="glass"]'),
  ).toHaveCount(2);
  await expect(showcase.getByRole("button", { name: "Clear date" })).toHaveCount(0);
  await expect(showcase.locator('button[data-variant="outline"]')).toHaveCount(0);

  const autocompleteSurfaces = await showcase
    .locator('[data-hero-component="Autocomplete"] [data-slot="autocomplete"]')
    .first()
    .evaluate((element) => {
      const wrapperStyle = getComputedStyle(element);
      const triggerStyle = getComputedStyle(element.firstElementChild as Element);
      return {
        triggerRadius: triggerStyle.borderRadius,
        wrapperBackground: wrapperStyle.backgroundColor,
      };
    });
  expect(autocompleteSurfaces.triggerRadius).not.toBe("0px");
  expect(autocompleteSurfaces.wrapperBackground).toBe("rgba(0, 0, 0, 0)");

  const cardItemClass =
    (await showcase.locator('[data-hero-component="Card"]').first().getAttribute("class")) ?? "";
  expect(cardItemClass).not.toMatch(/(?:^|\s)(?:bg|border|rounded)-/);

  await expect
    .poll(() => tracks.first().evaluate((element) => getComputedStyle(element).animationName))
    .toBe("poyraz-hero-marquee");
  await expect
    .poll(() => viewport.evaluate((element) => getComputedStyle(element).maskImage))
    .not.toBe("none");
  await expect
    .poll(() => edge.evaluate((element) => getComputedStyle(element).backdropFilter))
    .toContain("blur");

  const xBefore = await tracks.first().evaluate((element) => element.getBoundingClientRect().x);
  await page.waitForTimeout(200);
  const xAfter = await tracks.first().evaluate((element) => element.getBoundingClientRect().x);
  expect(xAfter).toBeLessThan(xBefore);

  const dialogItem = showcase.locator('[data-hero-component="Dialog"]').first();
  await dialogItem.evaluate((element) => {
    const track = element.closest<HTMLElement>(".poyraz-hero-marquee-track");
    const viewport = track?.parentElement;
    if (!track || !viewport) throw new Error("Dialog marquee track was not found");
    const item = element as HTMLElement;
    const centeredOffset = viewport.clientWidth / 2 - item.clientWidth / 2;
    track.style.animation = "none";
    track.style.transform = `translate3d(${-item.offsetLeft + centeredOffset}px, 0, 0)`;
  });

  await dialogItem.getByRole("button", { name: "Open Dialog" }).click();
  await expect(page.getByRole("dialog", { name: "Poyraz UI Dialog" })).toBeVisible();
  await expect(showcase).toHaveAttribute("data-interacting", "");
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog", { name: "Poyraz UI Dialog" })).toBeHidden();
  await dialogItem.evaluate((element) => {
    const track = element.closest<HTMLElement>(".poyraz-hero-marquee-track");
    if (!track) return;
    track.style.animation = "";
    track.style.transform = "";
  });

  await showcase.hover();
  await expect
    .poll(() =>
      tracks.evaluateAll((elements) =>
        elements.map((element) => getComputedStyle(element).animationPlayState),
      ),
    )
    .toEqual(["paused", "paused", "paused", "paused", "paused", "paused"]);

  await page.getByRole("button", { name: "Dark theme" }).click();
  await expect(page.locator("html")).toHaveClass(/dark/);
  const darkSurfaces = await showcase.evaluate((element) => {
    const input = element.querySelector('[data-hero-component="Input"] [data-slot="input"]');
    const card = element.querySelector('[data-hero-component="Card"] [data-slot="card"]');
    if (!input || !card) throw new Error("Semantic hero surfaces were not found");
    return {
      card: getComputedStyle(card).backgroundColor,
      input: getComputedStyle(input).backgroundColor,
    };
  });
  expect(darkSurfaces.card).not.toBe("rgb(255, 255, 255)");
  expect(darkSurfaces.input).not.toBe("rgb(255, 255, 255)");

  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect
    .poll(() =>
      tracks.evaluateAll((elements) =>
        elements.map((element) => getComputedStyle(element).animationName),
      ),
    )
    .toEqual(["none", "none", "none", "none", "none", "none"]);
});

test("tabs support keyboard-only navigation", async ({ page }) => {
  await page.goto("/docs/molecules/tabs");
  const account = page.getByRole("tab", { name: "Account" }).first();
  const password = page.getByRole("tab", { name: "Password" }).first();

  await account.focus();
  await page.keyboard.press("ArrowRight");

  await expect(password).toBeFocused();
  await expect(password).toHaveAttribute("data-state", "active");
});

test("dialog traps focus and returns it to the trigger", async ({ page }) => {
  await page.goto("/docs/molecules/dialog");
  const trigger = page.getByRole("button", { name: "Edit Profile" }).first();

  await trigger.focus();
  await page.keyboard.press("Enter");
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();

  for (let index = 0; index < 8; index += 1) await page.keyboard.press("Tab");
  await expect(dialog.locator(":focus")).toHaveCount(1);

  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
  await expect(trigger).toBeFocused();
});
