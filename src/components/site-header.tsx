import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GITHUB_URL, NAV_LINKS } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto grid w-full max-w-322 grid-cols-[1fr_auto] items-center gap-y-3 px-6 py-5 md:h-22 md:grid-cols-[1fr_auto_1fr] md:py-0">
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

        <nav
          aria-label="Main"
          className="order-last col-span-2 -mx-1 overflow-x-auto md:order-0 md:col-span-1 md:mx-0 md:overflow-visible"
        >
          <ul className="flex items-center gap-1 text-[15px] font-medium">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="rounded-md px-3 py-1.5 text-text outline-none transition-colors hover:text-text/60 focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-text"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Button
          render={<a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" />}
          nativeButton={false}
          className="justify-self-end"
        >
          <svg aria-hidden viewBox="0 0 24 24" className="size-3.5 fill-current">
            <path d="M12 2.5l2.92 5.92 6.53.95-4.72 4.6 1.11 6.5L12 17.4l-5.84 3.07 1.11-6.5-4.72-4.6 6.53-.95L12 2.5z" />
          </svg>
          Give us a star
        </Button>
      </div>
    </header>
  );
}
