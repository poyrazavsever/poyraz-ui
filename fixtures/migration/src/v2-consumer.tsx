import { Button, Card, CardContent, CardHeader, CardTitle, Input } from "poyraz-ui/atoms";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "poyraz-ui/molecules";

export function V2Consumer() {
  return (
    <Card variant="bordered">
      <CardHeader>
        <CardTitle>V2 consumer</CardTitle>
      </CardHeader>
      <CardContent>
        <Input aria-label="Workspace name" />
        <Dialog>
          <DialogTrigger asChild>
            <Button size="sm">Open</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>V2 package import fixture</DialogTitle>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}
