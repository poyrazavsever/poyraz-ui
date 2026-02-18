"use client";

import { useState } from "react";
import { AnnouncementBar } from "poyraz-ui/organisms";
import { Button } from "poyraz-ui/atoms";
import { Megaphone, Sparkles, AlertTriangle } from "lucide-react";
import { ComponentPage, DemoSection } from "@/components/docs/code-block";

export default function AnnouncementBarPage() {
  const [showDefault, setShowDefault] = useState(true);
  const [showInfo, setShowInfo] = useState(true);
  const [showSuccess, setShowSuccess] = useState(true);
  const [showWarning, setShowWarning] = useState(true);
  const [showDanger, setShowDanger] = useState(true);
  const [showBranded, setShowBranded] = useState(true);

  return (
    <ComponentPage
      name="Announcement Bar"
      description="Dismissable top-of-page notification strip. Supports multiple color variants, icons, and action elements."
      importCode={`import { AnnouncementBar } from "poyraz-ui/organisms";`}
    >
      <DemoSection
        title="Default"
        description="Dark announcement bar with dismiss button."
        code={`<AnnouncementBar>
  🚀 Poyraz UI v1.0 is now available!
</AnnouncementBar>`}
      >
        {showDefault ? (
          <AnnouncementBar onDismiss={() => setShowDefault(false)}>
            🚀 Poyraz UI v1.0 is now available!
          </AnnouncementBar>
        ) : (
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowDefault(true)}
          >
            Show again
          </Button>
        )}
      </DemoSection>

      <DemoSection
        title="With Icon & Action"
        description="Bar with a leading icon and action button."
        code={`<AnnouncementBar
  variant="branded"
  icon={<Sparkles className="h-4 w-4" />}
  action={
    <a href="#" className="underline font-bold text-xs">
      Learn More →
    </a>
  }
>
  New components added this week!
</AnnouncementBar>`}
      >
        {showBranded ? (
          <AnnouncementBar
            variant="branded"
            icon={<Sparkles className="h-4 w-4" />}
            action={
              <a href="#" className="underline font-bold text-xs">
                Learn More →
              </a>
            }
            onDismiss={() => setShowBranded(false)}
          >
            New components added this week!
          </AnnouncementBar>
        ) : (
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowBranded(true)}
          >
            Show again
          </Button>
        )}
      </DemoSection>

      <DemoSection
        title="Variants"
        description="All color variants: default, info, success, warning, danger, branded."
        code={`<AnnouncementBar variant="default">Default</AnnouncementBar>
<AnnouncementBar variant="info">Info update</AnnouncementBar>
<AnnouncementBar variant="success">Operation successful!</AnnouncementBar>
<AnnouncementBar variant="warning">Maintenance scheduled</AnnouncementBar>
<AnnouncementBar variant="danger">Critical security update</AnnouncementBar>
<AnnouncementBar variant="branded">Branded announcement</AnnouncementBar>`}
      >
        <div className="flex flex-col gap-2 w-full">
          {showDefault ? (
            <AnnouncementBar
              variant="default"
              onDismiss={() => setShowDefault(false)}
            >
              Default
            </AnnouncementBar>
          ) : null}
          {showInfo ? (
            <AnnouncementBar
              variant="info"
              onDismiss={() => setShowInfo(false)}
            >
              Info update
            </AnnouncementBar>
          ) : null}
          {showSuccess ? (
            <AnnouncementBar
              variant="success"
              onDismiss={() => setShowSuccess(false)}
            >
              Operation successful!
            </AnnouncementBar>
          ) : null}
          {showWarning ? (
            <AnnouncementBar
              variant="warning"
              icon={<AlertTriangle className="h-4 w-4" />}
              onDismiss={() => setShowWarning(false)}
            >
              Maintenance scheduled
            </AnnouncementBar>
          ) : null}
          {showDanger ? (
            <AnnouncementBar
              variant="danger"
              onDismiss={() => setShowDanger(false)}
            >
              Critical security update
            </AnnouncementBar>
          ) : null}
          <Button
            variant="outline"
            size="sm"
            className="self-start mt-2"
            onClick={() => {
              setShowDefault(true);
              setShowInfo(true);
              setShowSuccess(true);
              setShowWarning(true);
              setShowDanger(true);
              setShowBranded(true);
            }}
          >
            Reset all
          </Button>
        </div>
      </DemoSection>

      <DemoSection
        title="Non-Dismissible"
        description="Bar without a dismiss button."
        code={`<AnnouncementBar
  dismissible={false}
  icon={<Megaphone className="h-4 w-4" />}
>
  This bar cannot be dismissed.
</AnnouncementBar>`}
      >
        <AnnouncementBar
          dismissible={false}
          icon={<Megaphone className="h-4 w-4" />}
        >
          This bar cannot be dismissed.
        </AnnouncementBar>
      </DemoSection>
    </ComponentPage>
  );
}
