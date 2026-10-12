import { Field, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const fruits = [
  { label: "Select a fruit", value: null },
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Orange", value: "orange" },
];

const plans = [
  { label: "Free", value: "free" },
  { label: "Pro", value: "pro" },
  { label: "Team", value: "team" },
  { label: "Enterprise", value: "enterprise" },
];

export default function SelectDemo() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-6">
      <Field name="fruit">
        <FieldLabel>Fruit</FieldLabel>
        <Select items={fruits}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              {fruits.slice(1).map((fruit) => (
                <SelectItem key={fruit.value} value={fruit.value}>
                  {fruit.label}
                </SelectItem>
              ))}
            </SelectGroup>
            <SelectSeparator />
            <SelectItem value="grape" disabled>
              Grape (out of stock)
            </SelectItem>
          </SelectContent>
        </Select>
      </Field>
      <Field name="plan">
        <FieldLabel>Plan</FieldLabel>
        <Select items={plans} defaultValue="pro">
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {plans.map((plan) => (
              <SelectItem key={plan.value} value={plan.value}>
                {plan.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>
      <Field name="region" disabled>
        <FieldLabel>Region</FieldLabel>
        <Select items={[{ label: "Europe", value: "eu" }]} defaultValue="eu" disabled>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="eu">Europe</SelectItem>
          </SelectContent>
        </Select>
      </Field>
    </div>
  );
}
