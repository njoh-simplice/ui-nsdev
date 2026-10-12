"use client";

import { useRef } from "react";
import { Moon, Palette } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Kbd } from "@/components/ui/kbd";
import { ToastDescription, ToastTitle, useToast, type ToastPosition } from "@/components/ui/toast";

const places: { position: ToastPosition; label: string }[] = [
  { position: "top-left", label: "Top left" },
  { position: "top-center", label: "Top center" },
  { position: "top-right", label: "Top right" },
  { position: "bottom-left", label: "Bottom left" },
  { position: "bottom-center", label: "Bottom center" },
  { position: "bottom-right", label: "Bottom right" },
];

export default function ToastDemo() {
  const toast = useToast();
  const saves = useRef(0);
  const place = useRef(0);

  return (
    <>
      {/* 1. Success */}
      <Button variant="secondary" onClick={() => toast.add({ type: "success", title: "Successfully toasted!" })}>
        Success
      </Button>

      {/* 2. Error */}
      <Button variant="secondary" onClick={() => toast.add({ type: "error", title: "This didn't work." })}>
        Error
      </Button>

      {/* 3. Promise: the toast follows the promise. Every second save fails. */}
      <Button
        variant="secondary"
        onClick={() => {
          saves.current += 1;
          const fails = saves.current % 2 === 0;
          const save = new Promise<void>((resolve, reject) => setTimeout(fails ? reject : resolve, 2000));
          toast.promise(save, {
            loading: "Saving...",
            success: "Settings saved!",
            error: "Could not save settings.",
          }).catch(() => {});
        }}
      >
        Promise
      </Button>

      {/* 4. Multi line */}
      <Button
        variant="secondary"
        onClick={() =>
          toast.add({
            title: "Multi-line message",
            description:
              "A longer description wraps onto several lines instead of being cut off, and the toast grows to fit it.",
          })
        }
      >
        Multi line
      </Button>

      {/* 5. Emoji: any element, or text like an emoji, can be the icon */}
      <Button variant="secondary" onClick={() => toast.add({ title: "Good job!", data: { icon: "👏" } })}>
        Emoji
      </Button>

      {/* 6. Dark: the page background with a bright border */}
      <Button
        variant="secondary"
        onClick={() => toast.add({ title: "Dark mode", data: { tone: "dark", icon: <Moon /> } })}
      >
        Dark mode
      </Button>

      {/* 7. JSX content: the title and description accept elements */}
      <Button
        variant="secondary"
        onClick={() =>
          toast.add({
            title: "Custom JSX",
            description: (
              <>
                Links, <Kbd>keys</Kbd> and <em>emphasis</em> work here. <Link href="/docs">Read the docs</Link>.
              </>
            ),
          })
        }
      >
        JSX content
      </Button>

      {/* 8. Themed: a soft accent wash with an accent icon */}
      <Button
        variant="secondary"
        onClick={() =>
          toast.add({
            title: "Themed toast",
            description: "Colors come from the theme tokens.",
            data: { tone: "themed", icon: <Palette className="text-accent" /> },
          })
        }
      >
        Themed
      </Button>

      {/* 9. Custom position: each press uses the next place */}
      <Button
        variant="secondary"
        onClick={() => {
          const { position, label } = places[place.current % places.length];
          place.current += 1;
          toast.add({ title: label, description: "Toasts in the same place stack.", data: { position } });
        }}
      >
        Custom position
      </Button>

      {/* 10. Tailwind: your own layout, built from classes */}
      <Button
        variant="secondary"
        onClick={() =>
          toast.add({
            timeout: 8000,
            data: {
              custom: (
                <div className="flex items-start gap-3">
                  <Avatar size="sm">
                    <AvatarImage src="/assets/images/claude-ai-icon.webp" alt="" />
                    <AvatarFallback>C</AvatarFallback>
                  </Avatar>
                  <div className="flex min-w-0 flex-col gap-1">
                    <ToastTitle>Claude</ToastTitle>
                    <ToastDescription>Hey 👋 The review is done. Want to see the notes?</ToastDescription>
                  </div>
                </div>
              ),
            },
          })
        }
      >
        Tailwind
      </Button>
    </>
  );
}
