import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LabelDemo() {
  return (
    <>
      <div className="flex w-56 flex-col gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="you@example.com" />
      </div>
      <Label>
        <Checkbox defaultChecked />
        Subscribe to updates
      </Label>
      <Label>
        <Checkbox disabled />
        Disabled option
      </Label>
      <div className="flex w-56 flex-col gap-2">
        <Label htmlFor="locked" disabled>
          Locked field
        </Label>
        <Input id="locked" placeholder="Disabled" disabled />
      </div>
    </>
  );
}
