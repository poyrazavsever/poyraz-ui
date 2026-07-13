"use client";

import { Boxes, Code2, LayoutDashboard, Sparkles } from "lucide-react";

import {
  Navbar,
  NavbarBrand,
  NavbarDropdown,
  NavbarLinks,
  NavbarMain,
  NavbarMegaMenu,
  NavbarMegaMenuItem,
  NavbarMobileDropdown,
  NavbarMobileMenu,
  NavbarMobileToggle,
} from "@/components/ui/organisms/navbar";

const products = [
  { title: "UI components", description: "Accessible building blocks", icon: Boxes },
  { title: "Application blocks", description: "Responsive product layouts", icon: LayoutDashboard },
  { title: "Source registry", description: "Own and adapt every file", icon: Code2 },
];

function MegaMenuBlock() {
  return (
    <Navbar data-slot="mega-menu-block" variant="glass" className="rounded-lg">
      <NavbarMain>
        <NavbarBrand href="#" className="font-semibold">
          <Sparkles className="size-5 text-primary" /> Poyraz UI
        </NavbarBrand>
        <NavbarLinks aria-label="Product navigation">
          <NavbarDropdown label="Products">
            <NavbarMegaMenu layout="full">
              {products.map(({ title, description, icon: Icon }) => (
                <NavbarMegaMenuItem key={title} href="#" title={title} description={description}>
                  <Icon className="mt-2 size-4 text-primary" />
                </NavbarMegaMenuItem>
              ))}
            </NavbarMegaMenu>
          </NavbarDropdown>
        </NavbarLinks>
        <NavbarMobileToggle />
      </NavbarMain>
      <NavbarMobileMenu>
        <NavbarMobileDropdown label="Products">
          {products.map(({ title }) => (
            <a key={title} href="#" className="block px-3 py-2 text-sm">
              {title}
            </a>
          ))}
        </NavbarMobileDropdown>
      </NavbarMobileMenu>
    </Navbar>
  );
}

export { MegaMenuBlock, products as megaMenuProducts };
