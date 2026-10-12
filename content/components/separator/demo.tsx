import { Separator } from "@/components/ui/separator";

export default function SeparatorDemo() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <div>
        <p className="font-semibold">nsdev/ui</p>
        <p className="text-sm text-text-secondary">Components built on Base UI.</p>
      </div>
      <Separator />
      <div className="flex h-5 items-center gap-3 text-base">
        <span>Doc</span>
        <Separator orientation="vertical" />
        <span>Components</span>
        <Separator orientation="vertical" />
        <span>Blocks</span>
      </div>
    </div>
  );
}
