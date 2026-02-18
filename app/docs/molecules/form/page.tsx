"use client";

import {
  ComponentPage,
  DemoSection,
  CodeBlock,
} from "@/components/docs/code-block";

export default function FormPage() {
  return (
    <ComponentPage
      name="Form"
      description="Form utilities and context providers for building validated forms. Extends React Hook Form with Poyraz UI styling."
      importCode={`import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "poyraz-ui/molecules";`}
    >
      <section className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-lg font-bold">Usage</h2>
          <p className="text-sm text-slate-500">
            The Form component wraps React Hook Form and provides context for
            label, description, and error message components. Pair with Zod or
            other validation libraries for schema validation.
          </p>
        </div>
        <CodeBlock
          code={`import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "poyraz-ui/molecules";
import { Input } from "poyraz-ui/atoms";
import { Button } from "poyraz-ui/atoms";

const schema = z.object({
  username: z.string().min(2, "Too short"),
});

function MyForm() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: { username: "" },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(console.log)}>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}`}
        />
      </section>
    </ComponentPage>
  );
}
