import { DashboardShellBlock } from "@/components/ui/blocks/phase8/dashboard-shell-block";
import { SmartDashboardBlock } from "@/components/ui/blocks/phase8/smart-dashboard-block";
import { ComponentPage, DemoSection } from "@/components/docs/code-block";
import { BlockPreview } from "@/components/docs/block-preview";

const code = `import { DashboardShellBlock } from "@/components/ui/blocks/dashboard-shell-block";
import { SmartDashboardBlock } from "@/components/ui/blocks/smart-dashboard-block";

export default function DashboardPage() {
  return <DashboardShellBlock><SmartDashboardBlock /></DashboardShellBlock>;
}`;

export default function DashboardTemplatePage() {
  return (
    <ComponentPage name="Soft Glass Dashboard" description="A source-owned dashboard shell with semantic glass surfaces, responsive navigation and data-driven content." importCode={`import { DashboardShellBlock, SmartDashboardBlock } from "@/components/ui/blocks";`}>
      <DemoSection title="Dashboard Shell" description="Sidebar visibility, metric columns and content padding follow the preview container instead of the browser viewport." code={code}><BlockPreview><DashboardShellBlock><SmartDashboardBlock /></DashboardShellBlock></BlockPreview></DemoSection>
    </ComponentPage>
  );
}
