import { Button } from "@/components/ui/atoms/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/atoms/card";
import { Input } from "@/components/ui/atoms/input";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/molecules/dialog";

export function V3Consumer() {
  return (
    <Card variant="outline" radius="xl">
      <CardHeader>
        <CardTitle>V3 registry consumer</CardTitle>
      </CardHeader>
      <CardContent>
        <Input aria-label="Workspace name" radius="md" />
        <Dialog>
          <DialogTrigger asChild>
            <Button size="sm">Open</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Final V3 fixture</DialogTitle>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}
