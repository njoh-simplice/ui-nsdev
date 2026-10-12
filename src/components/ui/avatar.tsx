"use client";

import { Children, createContext, useContext, type ComponentProps } from "react";
import { Avatar as BaseAvatar } from "@base-ui/react/avatar";
import { cx } from "@/lib/cx";

type Size = "sm" | "md" | "lg";

// An avatar inside an AvatarGroup takes the group's size, so the circles always match.
const GroupSize = createContext<Size | undefined>(undefined);

const sizes: Record<Size, string> = {
  sm: "size-8 border-2",
  md: "size-12 border-2",
  lg: "size-14 border-3",
};

// How far each avatar tucks behind the one in front of it: about 70% of its width.
const overlap: Record<Size, string> = {
  sm: "-ml-5",
  md: "-ml-8",
  lg: "-ml-10",
};

export function Avatar({
  size,
  className,
  ...props
}: Omit<ComponentProps<typeof BaseAvatar.Root>, "className"> & { size?: Size; className?: string }) {
  const inherited = useContext(GroupSize);
  const resolved = size ?? inherited ?? "md";
  return (
    <BaseAvatar.Root
      className={cx(
        "relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full border-text bg-surface align-middle text-text select-none",
        sizes[resolved],
        className,
      )}
      {...props}
    />
  );
}

export function AvatarImage({
  className,
  ...props
}: Omit<ComponentProps<typeof BaseAvatar.Image>, "className"> & { className?: string }) {
  return <BaseAvatar.Image className={cx("size-full object-cover", className)} {...props} />;
}

// Shown while the image loads, and instead of it when it fails.
export function AvatarFallback({
  className,
  ...props
}: Omit<ComponentProps<typeof BaseAvatar.Fallback>, "className"> & { className?: string }) {
  return (
    <BaseAvatar.Fallback
      className={cx("flex size-full items-center justify-center text-sm font-semibold", className)}
      {...props}
    />
  );
}

// Overlapping avatars. The first one is in front and each later one sits behind it.
export function AvatarGroup({
  size = "md",
  className,
  children,
  ...props
}: ComponentProps<"div"> & { size?: Size }) {
  const items = Children.toArray(children);
  return (
    <GroupSize.Provider value={size}>
      <div role="group" className={cx("inline-flex items-center", className)} {...props}>
        {items.map((child, index) => (
          <span
            key={index}
            style={{ zIndex: items.length - index }}
            className={cx("relative inline-flex", index > 0 && overlap[size])}
          >
            {child}
          </span>
        ))}
      </div>
    </GroupSize.Provider>
  );
}
