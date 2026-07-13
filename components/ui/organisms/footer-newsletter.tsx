"use client";

import * as React from "react";

import { Button } from "@/components/ui/atoms/button";
import { Input } from "@/components/ui/atoms/input";
import { cn } from "@/lib/utils";

export interface FooterNewsletterProps extends React.HTMLAttributes<HTMLDivElement> {
  heading?: string;
  description?: string;
  placeholder?: string;
  buttonText?: string;
  onSubscribe?: (email: string) => void;
}

const FooterNewsletter = React.forwardRef<HTMLDivElement, FooterNewsletterProps>(
  (
    {
      className,
      heading = "Subscribe to our newsletter",
      description = "Get the latest updates directly in your inbox.",
      placeholder = "you@example.com",
      buttonText = "Subscribe",
      onSubscribe,
      ...props
    },
    ref,
  ) => {
    const [email, setEmail] = React.useState("");

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      const value = email.trim();
      if (!value) return;
      onSubscribe?.(value);
      setEmail("");
    }

    return (
      <div
        ref={ref}
        data-slot="footer-newsletter"
        className={cn(
          "rounded-lg border border-border bg-surface-subtle p-4 @sm/footer:p-6",
          className,
        )}
        {...props}
      >
        <h4 className="text-sm font-semibold text-foreground">{heading}</h4>
        <p className="mt-1 text-xs text-muted-foreground">{description}</p>
        <form
          data-slot="footer-newsletter-form"
          onSubmit={handleSubmit}
          className="mt-4 flex flex-col gap-2 @sm/footer:flex-row"
        >
          <Input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder={placeholder}
            aria-label={placeholder}
            required
            className="min-w-0 flex-1"
          />
          <Button type="submit" className="shrink-0">
            {buttonText}
          </Button>
        </form>
      </div>
    );
  },
);
FooterNewsletter.displayName = "FooterNewsletter";

export { FooterNewsletter };
