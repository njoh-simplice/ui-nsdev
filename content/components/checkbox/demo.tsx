import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function CheckboxDemo() {
  return (
    <>
      <Checkbox aria-label="Unchecked" />
      <Checkbox aria-label="Checked" defaultChecked />
      <Checkbox aria-label="Indeterminate" indeterminate />
      <Checkbox aria-label="Disabled" disabled />
      <Checkbox aria-label="Disabled and checked" disabled defaultChecked />
      <Label>
        <Checkbox defaultChecked />
        Accept the terms
      </Label>
    </>
  );
}
