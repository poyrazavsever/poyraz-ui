import { AuthCardBlock } from "@/components/ui/blocks/phase8/auth-card-block";
import { ComponentPage, DemoSection } from "@/components/docs/code-block";
import { BlockPreview } from "@/components/docs/block-preview";

const code = `import { AuthCardBlock } from "@/components/ui/blocks/auth-card-block";

export default function LoginPage() {
  return <AuthCardBlock />;
}`;

export default function AuthTemplatePage() {
  return (
    <ComponentPage
      name="Auth Card"
      description="Container-responsive authentication block built with the v3 Card, Input and Button primitives."
      importCode={`import { AuthCardBlock } from "@/components/ui/blocks/auth-card-block";`}
    >
      <DemoSection
        title="Soft Glass Sign In"
        description="The form remains usable inside the narrow docs canvas and expands naturally on a full page."
        code={code}
      >
        <BlockPreview>
          <AuthCardBlock />
        </BlockPreview>
      </DemoSection>
    </ComponentPage>
  );
}
