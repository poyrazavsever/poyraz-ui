"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/atoms/button";
import { ComponentPage, DemoSection } from "@/components/docs/code-block";

export default function SonnerPage() {
  return (
    <ComponentPage
      name="Sonner (Toast)"
      description="Toast notification system powered by Sonner. Drop-in replacement for traditional toasts with brutalist styling."
      importCode={`import { Toaster } from "poyraz-ui/molecules";
import { toast } from "sonner";

// Place <Toaster /> once in your layout
// Then call toast() anywhere in your app`}
    >
      <DemoSection
        title="Default Toast"
        description="A simple text toast notification."
        code={`import { toast } from "sonner";

<Button onClick={() => toast("Event has been created")}>
  Show Toast
</Button>`}
      >
        <Button onClick={() => toast("Event has been created")}>
          Show Toast
        </Button>
      </DemoSection>

      <DemoSection
        title="With Description"
        description="Toast with title and description."
        code={`toast("Event created", {
  description: "Monday, January 3rd at 6:00pm",
});`}
      >
        <Button
          onClick={() =>
            toast("Event created", {
              description: "Monday, January 3rd at 6:00pm",
            })
          }
        >
          With Description
        </Button>
      </DemoSection>

      <DemoSection
        title="Variants"
        description="Success, error, warning, and info toast types."
        code={`toast.success("Profile saved successfully!");
toast.error("Something went wrong.");
toast.warning("Your session is about to expire.");
toast.info("A new update is available.");`}
      >
        <div className="flex flex-wrap gap-3">
          <Button onClick={() => toast.success("Profile saved successfully!")}>
            Success
          </Button>
          <Button
            variant="destructive"
            onClick={() => toast.error("Something went wrong.")}
          >
            Error
          </Button>
          <Button
            variant="outline"
            onClick={() => toast.warning("Your session is about to expire.")}
          >
            Warning
          </Button>
          <Button
            variant="secondary"
            onClick={() => toast.info("A new update is available.")}
          >
            Info
          </Button>
        </div>
      </DemoSection>

      <DemoSection
        title="With Action"
        description="Toast with an action button."
        code={`toast("File deleted", {
  description: "report-2024.pdf was removed.",
  action: {
    label: "Undo",
    onClick: () => console.log("Undo"),
  },
});`}
      >
        <Button
          variant="outline"
          onClick={() =>
            toast("File deleted", {
              description: "report-2024.pdf was removed.",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
            })
          }
        >
          With Action
        </Button>
      </DemoSection>

      <DemoSection
        title="Promise"
        description="Toast that resolves with a promise."
        code={`toast.promise(
  new Promise((resolve) => setTimeout(resolve, 2000)),
  {
    loading: "Loading...",
    success: "Data loaded!",
    error: "Failed to load data.",
  },
);`}
      >
        <Button
          variant="outline"
          onClick={() =>
            toast.promise(new Promise((resolve) => setTimeout(resolve, 2000)), {
              loading: "Loading...",
              success: "Data loaded!",
              error: "Failed to load data.",
            })
          }
        >
          Promise Toast
        </Button>
      </DemoSection>
    </ComponentPage>
  );
}
