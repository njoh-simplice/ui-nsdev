import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="page-gutter w-full pt-12 lg:pt-16">
      {/* Same column template as the mosaic so the copy lines up with its third column. */}
      <div className="grid gap-8 lg:grid-cols-[428fr_370fr_423fr] lg:items-end lg:gap-x-3">
        <div className="lg:col-span-2">
          <Link
            href="/components"
            className="inline-flex items-center gap-1.5 rounded-sm bg-surface px-2 py-0.5 text-[11px] font-medium text-text outline-none transition-colors hover:bg-border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text"
          >
            New component
            <ArrowRight aria-hidden className="size-3" />
          </Link>

          <h1 className="mt-1.5 text-[2.75rem] leading-[1.05] font-bold text-text sm:text-[3.5rem]">
            <span className="block">Own every Pixel of</span>
            <span className="block">
              your <span className="text-text-secondary">Design System</span>
              <span aria-hidden className="-mt-3 ml-4 inline-flex">
                {/* Photo is scaled up around the face (about 38% down) so it fills the circle. */}
                <span className="relative z-10 size-14 overflow-hidden rounded-full border-3 border-text">
                  <Image
                    src="/assets/images/profile.webp"
                    alt=""
                    width={112}
                    height={112}
                    className="size-full origin-[50%_38%] translate-y-[12%] scale-150 object-cover saturate-20"
                  />
                </span>
                <Image
                  src="/assets/images/claude-ai-icon.webp"
                  alt=""
                  width={56}
                  height={56}
                  className="-ml-10 size-14 rounded-full border-3 border-text object-cover"
                />
              </span>
            </span>
          </h1>
        </div>

        <div className="w-full max-w-105 lg:justify-self-end">
          <p className="text-lg leading-snug text-text">
            Every component ships fully styled. Swap in your own tokens{" "}
            <span className="whitespace-nowrap">{"{ color, type, radius, … }"}</span> and the whole
            library follows, in minutes, not weeks.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Button render={<Link href="/docs" />} nativeButton={false}>
              Get started
            </Button>
            <Button variant="secondary" render={<Link href="/components" />} nativeButton={false}>
              View components
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
