import { Label } from "@/components/ui/label";
import { Radio, RadioGroup } from "@/components/ui/radio-group";

export default function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="comfortable" aria-label="Density">
      <Label>
        <Radio value="default" />
        Default
      </Label>
      <Label>
        <Radio value="comfortable" />
        Comfortable
      </Label>
      <Label>
        <Radio value="compact" />
        Compact
      </Label>
      <Label>
        <Radio value="unavailable" disabled />
        Unavailable
      </Label>
    </RadioGroup>
  );
}
