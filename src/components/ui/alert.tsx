import type { ComponentProps } from "react";
import { CircleAlert, CircleCheck, Info, TriangleAlert, type LucideIcon } from "lucide-react";
import { cx } from "@/lib/cx";

type Variant = "default" | "success" | "warning" | "destructive";

// Each tone is a soft wash (10% fill, 30% border) with a full-strength icon, as the theming
// rules ask. Destructive is announced at once (role alert); the others politely (role status).
const variants: Record<Variant, { box: string; icon: string; Icon: LucideIcon; role: "status" | "alert" }> = {
  default: { box: "border-border bg-surface", icon: "text-text", Icon: Info, role: "status" },
  success: { box: "border-accent/30 bg-accent/10", icon: "text-accent", Icon: CircleCheck, role: "status" },
  warning: { box: "border-warning/30 bg-warning/10", icon: "text-warning", Icon: TriangleAlert, role: "status" },
  destructive: { box: "border-danger/30 bg-danger/10", icon: "text-danger", Icon: CircleAlert, role: "alert" },
};

export function Alert({
  variant = "default",
  className,
  children,
  ...props
}: ComponentProps<"div"> & { variant?: Variant }) {
  const { box, icon, Icon, role } = variants[variant];
  return (
    <div
      role={role}
      className={cx("grid grid-cols-[auto_1fr] items-start gap-x-3 rounded-lg border p-4 text-text", box, className)}
      {...props}
    >
      <Icon aria-hidden className={cx("mt-0.5 size-5", icon)} />
      <div className="flex flex-col gap-1">{children}</div>
    </div>
  );
}

export function AlertTitle({ className, ...props }: ComponentProps<"div">) {
  return <div className={cx("text-base leading-snug font-semibold", className)} {...props} />;
}

export function AlertDescription({ className, ...props }: ComponentProps<"div">) {
  return <div className={cx("text-sm text-text/70", className)} {...props} />;
}
