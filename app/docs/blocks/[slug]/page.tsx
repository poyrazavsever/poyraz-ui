import { notFound } from "next/navigation";

import docsCatalog from "@/src/docs-registry.json";
import { BlockDemo } from "@/components/docs/block-demo";
import { BlockPreview } from "@/components/docs/block-preview";
import { ComponentPage, DemoSection } from "@/components/docs/code-block";

export function generateStaticParams() {
  return docsCatalog.blocks.map(({ name }) => ({ slug: name }));
}

export default async function BlockPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const block = docsCatalog.blocks.find(({ name }) => name === slug);
  if (!block) notFound();

  const target = block.files[0]?.target ?? `@ui/blocks/${block.name}.tsx`;
  const componentName = block.title.replace(/[^a-zA-Z0-9]+(.)/g, (_, character: string) => character.toUpperCase()).replace(/\s/g, "");
  const importName = block.name === "footer-blocks"
    ? "BrandedFooterBlock, CenteredFooterBlock, CompactFooterBlock"
    : componentName;
  const importCode = `import { ${importName} } from "@/components/ui/${target.replace(/^@ui\//, "").replace(/\.tsx?$/, "")}";`;
  const usageCode = block.name === "footer-blocks" ? "<BrandedFooterBlock />" : `<${componentName} />`;

  return (
    <ComponentPage name={block.title} description={block.description} importCode={importCode}>
      <DemoSection title="Live preview" description="Resize the block canvas independently from the documentation viewport." code={usageCode}>
        <BlockPreview><BlockDemo name={block.name} /></BlockPreview>
      </DemoSection>
    </ComponentPage>
  );
}
