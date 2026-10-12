import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

export default function HoverCardDemo() {
  return (
    <p className="max-w-sm text-center text-base">
      Built by{" "}
      <HoverCard>
        <HoverCardTrigger href="https://github.com/njoh-simplice">@njoh-simplice</HoverCardTrigger>
        <HoverCardContent>
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
              <p className="text-base font-semibold">Njoh Simplice Junior</p>
              <p className="text-sm text-text/70">Builds nsdev/ui, a component library on Base UI and Tailwind.</p>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>{" "}
      with Base UI.
    </p>
  );
}
