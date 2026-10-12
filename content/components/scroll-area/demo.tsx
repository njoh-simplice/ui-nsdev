import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const tags = Array.from({ length: 30 }, (_, index) => `v1.${30 - index}.0`);
const tiles = Array.from({ length: 10 }, (_, index) => index + 1);

export default function ScrollAreaDemo() {
  return (
    <>
      <ScrollArea className="h-56 w-48">
        <div className="p-4">
          <h4 className="mb-3 text-sm font-medium text-text-secondary">Releases</h4>
          {tags.map((tag, index) => (
            <div key={tag}>
              <p className="py-2 font-mono text-sm">{tag}</p>
              {index < tags.length - 1 && <Separator />}
            </div>
          ))}
        </div>
      </ScrollArea>
      <ScrollArea className="w-72 max-w-full">
        <div className="flex w-max gap-3 p-4">
          {tiles.map((tile) => (
            <div
              key={tile}
              className="flex size-24 shrink-0 items-center justify-center rounded-md border border-border bg-surface font-mono text-sm text-text-secondary"
            >
              {tile}
            </div>
          ))}
        </div>
      </ScrollArea>
    </>
  );
}
