import type { ComponentProps } from "react";
import { Input as BaseInput } from "@base-ui/react/input";
import { cx } from "@/lib/cx";
import { controlStyles } from "@/lib/styles";

export function Input({
  className,
  ...props
}: Omit<ComponentProps<typeof BaseInput>, "className"> & { className?: string }) {
  return <BaseInput className={cx("h-9", controlStyles, className)} {...props} />;
}
