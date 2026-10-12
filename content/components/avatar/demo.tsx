import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from "@/components/ui/avatar";

// The photo is scaled up around the face so the circle shows the person, not the shoulders.
const face = "origin-[50%_38%] translate-y-[12%] scale-150 saturate-20";

export default function AvatarDemo() {
  return (
    <>
      <Avatar size="lg">
        <AvatarImage src="/assets/images/profile.webp" alt="Njoh Simplice Junior" className={face} />
        <AvatarFallback>NS</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarImage src="/assets/images/claude-ai-icon.webp" alt="Claude" />
        <AvatarFallback>C</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarImage src="/assets/images/missing.webp" alt="Njoh Simplice Junior" />
        <AvatarFallback>NS</AvatarFallback>
      </Avatar>
      <AvatarGroup size="lg" aria-label="Njoh Simplice Junior with Claude">
        <Avatar>
          <AvatarImage src="/assets/images/profile.webp" alt="" className={face} />
          <AvatarFallback>NS</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="/assets/images/claude-ai-icon.webp" alt="" />
          <AvatarFallback>C</AvatarFallback>
        </Avatar>
      </AvatarGroup>
      <Avatar size="md">
        <AvatarImage src="/assets/images/profile.webp" alt="Njoh Simplice Junior" className={face} />
        <AvatarFallback>NS</AvatarFallback>
      </Avatar>
      <Avatar size="sm">
        <AvatarImage src="/assets/images/profile.webp" alt="Njoh Simplice Junior" className={face} />
        <AvatarFallback>NS</AvatarFallback>
      </Avatar>
    </>
  );
}
