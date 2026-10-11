import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="mx-auto w-full max-w-322 px-6 pt-12 lg:pt-16">
      {/* Same column template as the mosaic so the copy lines up with its third column. */}
      <div className="grid gap-8 lg:grid-cols-[428fr_370fr_423fr] lg:items-end lg:gap-x-3">
        <div className="lg:col-span-2">
          <Link
            href="/components"
            className="inline-flex items-center gap-1.5 rounded-sm bg-surface px-2 py-0.5 text-[11px] font-medium text-text outline-none transition-colors hover:bg-border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text"
          >
            New component
            <span aria-hidden>→</span>
          </Link>

          <h1 className="mt-1.5 text-[2.5rem] leading-[1.05] font-bold text-text sm:text-5xl">
            <span className="block">Own every Pixel of</span>
            <span className="block">
              your <span className="text-text-secondary">Design System</span>
              <span aria-hidden className="ml-4 inline-flex translate-y-1.5 items-center align-middle">
                <Image
                  src="/assets/images/profile.webp"
                  alt=""
                  width={50}
                  height={50}
                  className="relative z-10 size-12.5 rounded-full border-2 border-bg object-cover"
                />
                <Image
                  src="/assets/images/claude-ai-icon.webp"
                  alt=""
                  width={50}
                  height={50}
                  className="-ml-6 size-12.5 rounded-full border-2 border-bg object-cover"
                />
              </span>
            </span>
          </h1>
        </div>

        <div>
          <p className="text-lg leading-snug text-text">
            Every component ships fully styled. Swap in your own tokens
            {" { color, type, radius, … } "}
            and the whole library follows, in minutes, not weeks.
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
