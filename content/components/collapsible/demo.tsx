import { Collapsible, CollapsiblePanel, CollapsibleTrigger } from "@/components/ui/collapsible";

export default function CollapsibleDemo() {
  return (
    <Collapsible className="max-w-xs">
      <CollapsibleTrigger>Recovery keys</CollapsibleTrigger>
      <CollapsiblePanel>
        <ul className="flex flex-col gap-1 py-2 font-mono text-sm text-text/70">
          <li>alien-bean-pasta</li>
          <li>wild-irish-burrito</li>
          <li>horse-battery-staple</li>
        </ul>
      </CollapsiblePanel>
    </Collapsible>
  );
}
