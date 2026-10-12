"use client";

import { useState } from "react";
import { Drawer } from "@base-ui/react/drawer";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cx } from "@/lib/cx";
import { NAV_LINKS, isActivePath } from "@/lib/site";

// Hamburger + right-hand drawer, shown below lg. Swipe right or tap the backdrop to close.
export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <Drawer.Root open={open} onOpenChange={setOpen} swipeDirection="right">
      <Drawer.Trigger
        render={<Button variant="secondary" size="icon" aria-label="Open menu" className="lg:hidden" />}
      >
        <Menu aria-hidden className="size-5" />
      </Drawer.Trigger>

      <Drawer.Portal>
        <Drawer.Backdrop className="fixed inset-0 z-50 min-h-dvh bg-black opacity-[calc(0.6*(1-var(--drawer-swipe-progress)))] transition-opacity duration-[450ms] ease-[cubic-bezier(0.32,0.72,0,1)] data-swiping:duration-0 data-starting-style:opacity-0 data-ending-style:opacity-0 data-ending-style:duration-[calc(var(--drawer-swipe-strength)*400ms)] motion-reduce:transition-none" />
        <Drawer.Viewport className="fixed inset-0 z-50 flex items-stretch justify-end">
          <Drawer.Popup className="h-full w-80 max-w-[85vw] overflow-y-auto overscroll-contain border-l border-border bg-bg p-6 text-text outline-none [transform:translateX(var(--drawer-swipe-movement-x))] transition-transform duration-[450ms] ease-[cubic-bezier(0.32,0.72,0,1)] data-swiping:select-none data-starting-style:[transform:translateX(100%)] data-ending-style:[transform:translateX(100%)] data-ending-style:duration-[calc(var(--drawer-swipe-strength)*400ms)] motion-reduce:transition-none">
            <Drawer.Content>
              <div className="flex items-center justify-between">
                <Drawer.Title className="text-base font-medium text-text-secondary">
                  Menu
                </Drawer.Title>
                <Drawer.Close
                  render={<Button variant="secondary" size="icon" aria-label="Close menu" />}
                >
                  <X aria-hidden className="size-5" />
                </Drawer.Close>
              </div>

              <nav aria-label="Main" className="mt-6">
                <ul className="flex flex-col text-2xl font-semibold">
                  {NAV_LINKS.map(({ href, label }) => {
                    const active = isActivePath(href, pathname);
                    return (
                      <li key={href}>
                        <Link
                          href={href}
                          aria-current={active ? "page" : undefined}
                          onClick={() => setOpen(false)}
                          className={cx(
                            "block rounded-md py-3 outline-none transition-colors",
                            "focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-text",
                            active ? "text-text" : "text-text-secondary hover:text-text",
                          )}
                        >
                          {label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </Drawer.Content>
          </Drawer.Popup>
        </Drawer.Viewport>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
