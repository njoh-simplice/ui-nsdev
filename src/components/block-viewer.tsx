"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Toggle } from "@base-ui/react/toggle";
import { ToggleGroup } from "@base-ui/react/toggle-group";
import { Fullscreen, Monitor, RotateCw, Smartphone, Tablet, type LucideIcon } from "lucide-react";
import { CopyButton } from "@/components/copy-button";
import { cx } from "@/lib/cx";
import { focusRing } from "@/lib/styles";

type View = "preview" | "code";
type Device = "desktop" | "tablet" | "mobile";

// The width each size renders the page at. Desktop and tablet are scaled down to fit the box;
// mobile is shown at full size. A frame is used (not a narrow box) because breakpoints follow the
// width of the window, so only a real frame of that width switches them. The frame has no
// border (it would take width from the page inside); a tablet or mobile frame is outlined.
const WIDTHS: Record<Device, number> = { desktop: 1280, tablet: 768, mobile: 375 };
const MOBILE_HEIGHT = 640;

const devices: { value: Device; label: string; Icon: LucideIcon }[] = [
  { value: "desktop", label: "Desktop", Icon: Monitor },
  { value: "tablet", label: "Tablet", Icon: Tablet },
  { value: "mobile", label: "Mobile", Icon: Smartphone },
];

const group = "inline-flex items-center gap-0.5 rounded-lg border border-border bg-bg p-0.5";

const segment = [
  "inline-flex h-7 cursor-pointer items-center justify-center rounded-md text-sm font-medium text-text-secondary",
  "transition-colors",
  focusRing,
  "not-data-[disabled]:hover:text-text not-data-[disabled]:data-[pressed]:bg-border not-data-[disabled]:data-[pressed]:text-text",
  "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-40",
].join(" ");

const iconAction = [
  "inline-flex size-7 cursor-pointer items-center justify-center rounded-md text-text-secondary",
  "transition-colors hover:bg-border hover:text-text",
  focusRing,
].join(" ");

// One example of a block: a toolbar over either its live preview or its code. The toolbar has
// Preview and Code, the example's description, the Desktop, Tablet and Mobile sizes, a link that
// opens the preview on its own, and a refresh. `children` is the highlighted code, rendered on
// the server.
export function BlockViewer({
  src,
  description,
  height,
  code,
  children,
}: {
  src: string;
  description: string;
  height: number;
  code: string;
  children: ReactNode;
}) {
  const [view, setView] = useState<View>("preview");
  const [device, setDevice] = useState<Device>("desktop");
  const [reload, setReload] = useState(0);
  const [width, setWidth] = useState(0);
  const area = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = area.current;
    if (!element) return;
    const measure = () => setWidth(element.clientWidth);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => observer.disconnect();
  }, [view]);

  const frameWidth = WIDTHS[device];
  const frameHeight = device === "mobile" ? MOBILE_HEIGHT : height;
  const scale = Math.min(1, width / frameWidth);
  const inPreview = view === "preview";

  return (
    <div className="demo-reset overflow-hidden rounded-lg border border-border">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 border-b border-border bg-surface p-2">
        <ToggleGroup
          aria-label="View"
          value={[view]}
          onValueChange={(value) => value[0] && setView(value[0] as View)}
          className={group}
        >
          <Toggle value="preview" className={cx(segment, "px-3")}>
            Preview
          </Toggle>
          <Toggle value="code" className={cx(segment, "px-3")}>
            Code
          </Toggle>
        </ToggleGroup>

        <span aria-hidden className="hidden h-5 w-px bg-border sm:block" />
        <p className="order-last w-full truncate text-sm font-medium text-text sm:order-none sm:w-auto sm:flex-1">
          {description}
        </p>

        <div className="ml-auto flex items-center gap-2 sm:ml-0">
          <ToggleGroup
            aria-label="Preview size"
            value={[device]}
            onValueChange={(value) => value[0] && setDevice(value[0] as Device)}
            disabled={!inPreview}
            className={cx(group, "max-sm:hidden")}
          >
            {devices.map(({ value, label, Icon }) => (
              <Toggle key={value} value={value} aria-label={label} title={label} className={cx(segment, "w-8")}>
                <Icon aria-hidden className="size-4" />
              </Toggle>
            ))}
          </ToggleGroup>

          <div className={group}>
            <a
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open the preview in a new tab"
              title="Open in a new tab"
              className={iconAction}
            >
              <Fullscreen aria-hidden className="size-4" />
            </a>
            <button
              type="button"
              aria-label="Refresh the preview"
              title="Refresh"
              disabled={!inPreview}
              onClick={() => setReload((value) => value + 1)}
              className={cx(iconAction, "disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-text-secondary")}
            >
              <RotateCw aria-hidden className="size-4" />
            </button>
          </div>
        </div>
      </div>

      {inPreview ? (
        <div ref={area} style={{ height: frameHeight * scale }} className="relative overflow-hidden bg-bg">
          {width > 0 && (
            <iframe
              key={reload}
              src={src}
              title={`${description}, ${device} size`}
              loading="lazy"
              style={{
                width: frameWidth,
                height: frameHeight,
                transform: `scale(${scale})`,
                marginLeft: Math.max(0, (width - frameWidth * scale) / 2),
              }}
              className={cx("origin-top-left border-0 bg-bg", device !== "desktop" && "outline outline-1 outline-border")}
            />
          )}
        </div>
      ) : (
        <div className="relative max-h-[40rem] overflow-auto bg-surface">
          <CopyButton text={code} className="absolute top-3 right-3 z-10" />
          {children}
        </div>
      )}
    </div>
  );
}
