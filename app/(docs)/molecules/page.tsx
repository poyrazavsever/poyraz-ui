import { Typography } from "@/components/ui/atoms/typography";
import { Separator } from "@/components/ui/atoms/separator";
import { MoleculesDemo } from "@/components/demos/molecules-demo";

export default function MoleculesPage() {
  return (
    <div className="space-y-12 pb-20">
      <div className="space-y-2">
        <Typography variant="h1">Molecules</Typography>
        <Typography variant="lead">
          Combinations of atoms that form functional UI units like cards, forms,
          and alerts.
        </Typography>
      </div>
      <Separator />

      <MoleculesDemo />
    </div>
  );
}
