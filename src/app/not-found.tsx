import type { Metadata } from "next";
import { House } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <main className="page-gutter flex flex-1 flex-col justify-center pt-16 pb-8 lg:pt-24">
      <p className="text-lg font-medium text-text-secondary">404</p>
      <h1 className="mt-2 text-[2.75rem] leading-[1.05] font-bold text-text sm:text-[3.5rem]">
        This page took a <span className="text-text-secondary">wrong turn</span>
      </h1>
      <p className="mt-5 max-w-105 text-lg leading-snug text-text">
        Nothing lives at this address, at least not yet. I&apos;m still building this library one
        component at a time, so the page you want may simply not exist.
      </p>
      <div className="mt-6 flex flex-wrap gap-4">
        <Button variant="inverse" render={<Link href="/" />} nativeButton={false}>
          Back to home
          <House aria-hidden className="size-4" />
        </Button>
        <Button variant="secondary" render={<Link href="/components" />} nativeButton={false}>
          View components
        </Button>
      </div>
    </main>
  );
}
