import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MobileNav } from "@/components/mobile-nav";
import { SiteNav } from "@/components/site-nav";
import { Button } from "@/components/ui/button";
import { GITHUB_URL } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="border-b border-border">
      {/* Below lg: logo on the left, star button + hamburger on the right. */}
      <div className="page-gutter flex h-18 w-full items-center justify-between lg:grid lg:h-22 lg:grid-cols-[1fr_auto_1fr]">
        <Link
          href="/"
          aria-label="NSDEV UI home"
          className="justify-self-start rounded-full outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text"
        >
          <Image
            src="/assets/images/logo.png"
            alt=""
            width={38}
            height={38}
            priority
            className="size-9.5"
          />
        </Link>

        <SiteNav />

        <div className="flex items-center gap-3 lg:justify-self-end">
          <Button
            render={<a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" />}
            nativeButton={false}
          >
            Give us a star
            <Star aria-hidden className="size-4 fill-current" />
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
