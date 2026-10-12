import type { ComponentProps } from "react";
import { cx } from "@/lib/cx";
import { controlStyles } from "@/lib/styles";

// A multi-line text field. It is the native element with the same look as Input, and it can be
// resized up and down (not sideways, so it can't break the layout). Inside a Field, render it
// through FieldControl so the label, hint and error are connected to it.
export function Textarea({ className, ...props }: ComponentProps<"textarea">) {
  return <textarea className={cx("min-h-24 resize-y py-2", controlStyles, className)} {...props} />;
}
