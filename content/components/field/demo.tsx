import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldControl, FieldDescription, FieldError, FieldLabel, Fieldset, FieldsetLegend } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function FieldDemo() {
  return (
    <>
      <div className="flex w-full max-w-xs flex-col gap-6">
        <Field name="name">
          <FieldLabel>Name</FieldLabel>
          <Input placeholder="Njoh Simplice" />
          <FieldDescription>Shown on your profile.</FieldDescription>
        </Field>
        <Field name="email" validationMode="onBlur">
          <FieldLabel>Email</FieldLabel>
          <Input type="email" required placeholder="you@example.com" />
          <FieldError match="valueMissing">Enter your email address.</FieldError>
          <FieldError match="typeMismatch">That doesn&apos;t look like an email address.</FieldError>
        </Field>
        <Field name="bio">
          <FieldLabel>Bio</FieldLabel>
          <FieldControl render={<Textarea />} />
          <FieldDescription>A sentence or two.</FieldDescription>
        </Field>
        <Field name="handle" disabled>
          <FieldLabel>Handle</FieldLabel>
          <Input placeholder="Disabled" />
        </Field>
      </div>
      <Fieldset>
        <FieldsetLegend>Notify me about</FieldsetLegend>
        <Label>
          <Checkbox defaultChecked />
          Replies
        </Label>
        <Label>
          <Checkbox />
          Mentions
        </Label>
      </Fieldset>
    </>
  );
}
