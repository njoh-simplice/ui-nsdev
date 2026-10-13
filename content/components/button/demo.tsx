import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ButtonDemo() {
  return (
    <>
      <Button>Button</Button>
      <Button variant="secondary">Button</Button>
      <Button variant="destructive">Button</Button>
      <Button variant="ghost">Button</Button>
      <Button disabled>Button</Button>
      <Button>
        Button
        <ArrowRight />
      </Button>
      <Button size="icon" aria-label="Next">
        <ArrowRight />
      </Button>
      <Button size="sm">Small</Button>
      <Button size="icon-sm" variant="secondary" aria-label="Next">
        <ArrowRight />
      </Button>
    </>
  );
}
