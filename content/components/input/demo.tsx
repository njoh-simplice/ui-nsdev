import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function InputDemo() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-4">
      <Input aria-label="Default" placeholder="Default" />
      <div className="flex flex-col gap-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="Njoh Simplice" />
      </div>
      <Input aria-label="Disabled" placeholder="Disabled" disabled />
      <div className="flex flex-col gap-2">
        <Input
          aria-label="Email"
          aria-invalid
          aria-describedby="email-error"
          defaultValue="not-an-email"
        />
        <p id="email-error" className="text-sm text-danger">
          Enter a valid email address.
        </p>
      </div>
    </div>
  );
}
