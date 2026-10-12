import { AlignCenter, AlignLeft, AlignRight, Bold, Italic, Underline } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup } from "@/components/ui/toggle-group";

export default function ToggleGroupDemo() {
  return (
    <>
      <ToggleGroup aria-label="Text alignment" defaultValue={["left"]}>
        <Toggle size="icon" value="left" aria-label="Align left">
          <AlignLeft />
        </Toggle>
        <Toggle size="icon" value="center" aria-label="Align center">
          <AlignCenter />
        </Toggle>
        <Toggle size="icon" value="right" aria-label="Align right">
          <AlignRight />
        </Toggle>
      </ToggleGroup>
      <ToggleGroup multiple aria-label="Text style" defaultValue={["bold", "italic"]}>
        <Toggle size="icon" value="bold" aria-label="Bold">
          <Bold />
        </Toggle>
        <Toggle size="icon" value="italic" aria-label="Italic">
          <Italic />
        </Toggle>
        <Toggle size="icon" value="underline" aria-label="Underline">
          <Underline />
        </Toggle>
      </ToggleGroup>
      <ToggleGroup aria-label="Billing period" defaultValue={["monthly"]}>
        <Toggle value="monthly">Monthly</Toggle>
        <Toggle value="yearly">Yearly</Toggle>
      </ToggleGroup>
      <ToggleGroup disabled aria-label="Disabled" defaultValue={["one"]}>
        <Toggle value="one">One</Toggle>
        <Toggle value="two">Two</Toggle>
      </ToggleGroup>
    </>
  );
}
