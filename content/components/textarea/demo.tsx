import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function TextareaDemo() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-4">
      <Textarea aria-label="Default" placeholder="Default" />
      <div className="flex flex-col gap-2">
        <Label htmlFor="bio">Bio</Label>
        <Textarea id="bio" placeholder="A sentence or two" />
      </div>
      <Textarea aria-label="Disabled" placeholder="Disabled" disabled />
      <div className="flex flex-col gap-2">
        <Textarea
          aria-label="Message"
          aria-invalid
          aria-describedby="message-error"
          defaultValue="Hi"
        />
        <p id="message-error" className="text-sm text-danger">
          Write at least 20 characters.
        </p>
      </div>
    </div>
  );
}
