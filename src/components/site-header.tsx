import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SiteNav } from "@/components/site-nav";
import { GITHUB_URL } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="border-b border-border">
      <div className="page-gutter grid w-full grid-cols-[1fr_auto] items-center gap-y-3 py-5 lg:h-22 lg:grid-cols-[1fr_auto_1fr] lg:py-0">
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

        <Button
          render={<a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" />}
          nativeButton={false}
          className="justify-self-end"
        >
          Give us a star
          <Star aria-hidden className="size-4 fill-current" />
        </Button>
      </div>
    </header>
  );
}
