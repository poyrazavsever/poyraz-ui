'use client'
import React from "react";
import Button, {
  PrimaryButton,
  SecondaryButton,
  OutlineButton,
  GhostButton,
  GradientButton,
  IconButton,
} from "./Button";

const ButtonShowcase = () => {
  return (
    <div className="flex flex-col gap-8 p-6 mt-18 sm:mt-0">
      <h2 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
        Button Variants
      </h2>

      {/* Variant Examples */}
      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-3">
            Button Variants
          </h3>
          <div className="flex flex-wrap gap-3">
            <PrimaryButton icon="hugeicons:rocket-01">Primary</PrimaryButton>
            <SecondaryButton icon="hugeicons:settings-02">
              Secondary
            </SecondaryButton>
            <OutlineButton icon="hugeicons:download-01">Outline</OutlineButton>
            <GhostButton icon="hugeicons:eye">Ghost</GhostButton>
            <GradientButton icon="hugeicons:sparkles">Gradient</GradientButton>
          </div>
        </div>

        {/* Size Examples */}
        <div>
          <h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-3">
            Button Sizes
          </h3>
          <div className="flex flex-wrap items-center gap-3">
            <PrimaryButton size="sm" icon="hugeicons:star">
              Small
            </PrimaryButton>
            <PrimaryButton size="md" icon="hugeicons:star">
              Medium
            </PrimaryButton>
            <PrimaryButton size="lg" icon="hugeicons:star">
              Large
            </PrimaryButton>
          </div>
        </div>

        {/* Icon Position Examples */}
        <div>
          <h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-3">
            Icon Positions
          </h3>
          <div className="flex flex-wrap gap-3">
            <SecondaryButton icon="hugeicons:arrow-left-01" iconPosition="left">
              Previous
            </SecondaryButton>
            <SecondaryButton
              icon="hugeicons:arrow-right-01"
              iconPosition="right"
            >
              Next
            </SecondaryButton>
          </div>
        </div>

        {/* Link Examples */}
        <div>
          <h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-3">
            As Links
          </h3>
          <div className="flex flex-wrap gap-3">
            <PrimaryButton href="/projects" icon="hugeicons:folder-01">
              View Projects
            </PrimaryButton>
            <OutlineButton
              href="https://github.com"
              target="_blank"
              icon="hugeicons:github"
            >
              GitHub
            </OutlineButton>
          </div>
        </div>

        {/* State Examples */}
        <div>
          <h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-3">
            Button States
          </h3>
          <div className="flex flex-wrap gap-3">
            <SecondaryButton loading>Loading...</SecondaryButton>
            <SecondaryButton disabled>Disabled</SecondaryButton>
            <IconButton iconOnly icon="hugeicons:heart" variant="ghost">
              ❤️
            </IconButton>
            <IconButton iconOnly icon="hugeicons:share-01" variant="outline">
              Share
            </IconButton>
          </div>
        </div>

        {/* Custom Combinations */}
        <div>
          <h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-3">
            Custom Combinations
          </h3>
          <div className="flex flex-wrap gap-3">
            <Button
              variant="gradient"
              size="lg"
              icon="hugeicons:download-01"
              onClick={() => alert("Download started!")}
            >
              Download Resume
            </Button>
            <Button variant="primary" icon="hugeicons:mail-01" href="/contact">
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="sm"
              icon="hugeicons:share-03"
              iconPosition="right"
            >
              Share
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonShowcase;
