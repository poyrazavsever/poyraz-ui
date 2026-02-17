import { Typography } from "@/components/ui/atoms/typography";
import { Separator } from "@/components/ui/atoms/separator";
import { OrganismsDemo } from "@/components/demos/organisms-demo";

export default function OrganismsPage() {
  return (
    <div className="space-y-12 pb-20">
      <div className="space-y-2">
        <Typography variant="h1">Organisms</Typography>
        <Typography variant="lead">
          Complex, standalone UI sections like Navbars, Sidebars, and Footers.
        </Typography>
      </div>
      <Separator />

      <OrganismsDemo />
    </div>
  );
}
