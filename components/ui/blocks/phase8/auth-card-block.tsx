import { ArrowRight, LockKeyhole } from "lucide-react";

import { Button } from "@/components/ui/atoms/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/atoms/card";
import { Input } from "@/components/ui/atoms/input";
import { Label } from "@/components/ui/atoms/label";

function AuthCardBlock() {
  return (
    <section data-slot="auth-card-block" className="@container/auth flex min-h-[32rem] items-center justify-center bg-surface-subtle p-3 @sm/auth:p-6">
      <Card variant="glass" className="w-full max-w-md">
        <CardHeader className="grid-cols-1 text-center">
          <span className="mx-auto mb-2 flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground"><LockKeyhole className="size-4" /></span>
          <CardTitle>Welcome back</CardTitle>
          <CardDescription>Use your work account to continue.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-1.5"><Label htmlFor="phase8-email">Email</Label><Input id="phase8-email" type="email" autoComplete="email" placeholder="name@company.com" /></div>
            <div className="space-y-1.5"><Label htmlFor="phase8-password">Password</Label><Input id="phase8-password" type="password" autoComplete="current-password" /></div>
            <Button type="submit" className="w-full">Sign in <ArrowRight className="size-4" /></Button>
          </form>
        </CardContent>
        <CardFooter className="justify-center text-xs text-muted-foreground">Need access? <a href="#" className="font-medium text-primary hover:underline">Contact your administrator</a></CardFooter>
      </Card>
    </section>
  );
}

export { AuthCardBlock };
