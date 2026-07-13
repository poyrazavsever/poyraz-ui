"use client";

import { Alert, AlertDescription, AlertTitle } from "poyraz-ui/molecules";
import { ComponentPage, DemoSection } from "@/components/docs/code-block";

export default function AlertPage() {
  return (
    <ComponentPage
      name="Alert"
      description="Contextual notification banners with 5 variants: default, info, success, warning, and destructive."
      importCode={`import { Alert, AlertTitle, AlertDescription } from "poyraz-ui/molecules";`}
    >
      <DemoSection
        title="All Variants"
        description="Each variant has a distinct color to convey meaning."
        code={`<Alert>
  <AlertTitle>Default</AlertTitle>
  <AlertDescription>General information.</AlertDescription>
</Alert>

<Alert variant="info">
  <AlertTitle>Info</AlertTitle>
  <AlertDescription>Your account has been updated.</AlertDescription>
</Alert>

<Alert variant="success">
  <AlertTitle>Success</AlertTitle>
  <AlertDescription>Changes saved successfully.</AlertDescription>
</Alert>

<Alert variant="warning">
  <AlertTitle>Warning</AlertTitle>
  <AlertDescription>Your trial is expiring soon.</AlertDescription>
</Alert>

<Alert variant="destructive">
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Session expired. Log in again.</AlertDescription>
</Alert>`}
      >
        <div className="grid gap-3">
          <Alert>
            <AlertTitle>Default</AlertTitle>
            <AlertDescription>General information for the user.</AlertDescription>
          </Alert>
          <Alert variant="info">
            <AlertTitle>Info</AlertTitle>
            <AlertDescription>Your account has been updated with new permissions.</AlertDescription>
          </Alert>
          <Alert variant="success">
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>Your changes have been saved successfully.</AlertDescription>
          </Alert>
          <Alert variant="warning">
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>Your free trial is expiring in 3 days.</AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
          </Alert>
        </div>
      </DemoSection>

      <DemoSection
        title="Appearance and Motion"
        description="Status role is independent from surface, radius and entrance motion."
        code={`<Alert variant="info" appearance="glass" radius="xl" motion="scale" />
<Alert variant="success" appearance="filled" />
<Alert variant="warning" appearance="inline" dismissible />`}
      >
        <div className="grid gap-3 rounded-2xl bg-[radial-gradient(circle_at_top,var(--color-info),var(--color-background))] p-5">
          <Alert variant="info" appearance="glass" radius="xl" motion="scale">
            <AlertTitle>Glass information</AlertTitle>
            <AlertDescription>Semantic color with translucent elevation.</AlertDescription>
          </Alert>
          <Alert variant="success" appearance="filled" motion="fade">
            <AlertTitle>Published</AlertTitle>
            <AlertDescription>The release is now available.</AlertDescription>
          </Alert>
          <Alert variant="warning" appearance="inline" dismissible>
            <AlertTitle>Review required</AlertTitle>
            <AlertDescription>Check the migration notes before continuing.</AlertDescription>
          </Alert>
        </div>
      </DemoSection>
    </ComponentPage>
  );
}
