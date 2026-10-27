import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { AUTHOR_URL, GITHUB_URL } from "@/lib/site";

const link =
  "rounded-sm font-semibold text-text outline-hidden transition-colors hover:text-text/60 focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-offset-2 focus-visible:outline-text";

export function SiteFooter() {
  return (
    <footer className="mt-6 pb-10 text-center text-base text-text-secondary">
      <p className="px-6">
        Built by{" "}
        {/* The name opens a Hover Card with a short introduction. It stays a plain link, with no
            underline, like the GitHub link beside it. */}
        <HoverCard>
          <HoverCardTrigger href={AUTHOR_URL} className={`${link} no-underline!`}>
            Njoh Simplice Junior.
          </HoverCardTrigger>
          <HoverCardContent side="top" className="text-left">
            <div className="flex gap-3">
              <Avatar>
                <AvatarImage
                  src="/assets/images/profile.webp"
                  alt=""
                  className="origin-[50%_38%] translate-y-[12%] scale-150 saturate-20"
                />
                <AvatarFallback>NS</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-1">
                <p className="text-base font-semibold text-text">Njoh Simplice Junior</p>
                <p className="text-sm text-text/70">
                  Crafting websites and mobile apps that align with your brand and engage your audience.
                </p>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>{" "}
        The source code is available on{" "}
        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className={link}>
          GitHub.
        </a>
      </p>
    </footer>
  );
}
