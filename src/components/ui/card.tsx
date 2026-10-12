import type { ComponentProps } from "react";
import { cx } from "@/lib/cx";

// A card is a raised surface you fill with parts. Build it from Card, CardHeader, CardTitle,
// CardDescription, CardContent and CardFooter; leave out the ones you don't need.
export function Card({ className, ...props }: ComponentProps<"div">) {
  return <div className={cx("rounded-lg border border-border bg-surface text-text", className)} {...props} />;
}

export function CardHeader({ className, ...props }: ComponentProps<"div">) {
  return <div className={cx("flex flex-col gap-1.5 p-6", className)} {...props} />;
}

// An h3. If the card sits under a different heading level, change it here.
export function CardTitle({ className, ...props }: ComponentProps<"h3">) {
  return <h3 className={cx("text-xl leading-tight font-semibold", className)} {...props} />;
}

export function CardDescription({ className, ...props }: ComponentProps<"p">) {
  return <p className={cx("text-sm text-text/70", className)} {...props} />;
}

export function CardContent({ className, ...props }: ComponentProps<"div">) {
  return <div className={cx("px-6 pb-6", className)} {...props} />;
}

export function CardFooter({ className, ...props }: ComponentProps<"div">) {
  return <div className={cx("flex items-center gap-3 px-6 pb-6", className)} {...props} />;
}
