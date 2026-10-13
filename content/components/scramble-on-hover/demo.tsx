import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrambleOnHover } from "@/components/ui/scramble-on-hover";
import { focusRing } from "@/lib/styles";

const link = `rounded-sm text-3xl font-semibold uppercase text-text-secondary transition-colors hover:text-text ${focusRing}`;

export default function ScrambleOnHoverDemo() {
  return (
    <div className="flex w-full flex-col items-center gap-8">
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
        {["Home", "Product", "Pricing"].map((label) => (
          <ScrambleOnHover key={label} render={<a href="#" className={link} />}>
            {label}
          </ScrambleOnHover>
        ))}
        <ScrambleOnHover
          render={<a href="#" className={`inline-flex items-center gap-1 ${link}`} />}
          after={<ArrowUpRight aria-hidden className="size-6" />}
        >
          GitHub
        </ScrambleOnHover>
      </div>
      <ScrambleOnHover render={<Button variant="secondary" />}>Get started</ScrambleOnHover>
      <ScrambleOnHover render={<p className="max-w-xs text-center text-lg text-text/80" />}>
        Hover over this sentence and every word scrambles in its own place.
      </ScrambleOnHover>
    </div>
  );
}
