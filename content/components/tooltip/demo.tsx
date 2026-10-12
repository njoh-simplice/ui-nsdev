import { Bold, Italic, Underline } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Kbd } from "@/components/ui/kbd";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger render={<Button variant="secondary" size="icon" aria-label="Bold" />}>
          <Bold />
        </TooltipTrigger>
        <TooltipContent>Bold</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger render={<Button variant="secondary" size="icon" aria-label="Italic" />}>
          <Italic />
        </TooltipTrigger>
        <TooltipContent>Italic</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger render={<Button variant="secondary" size="icon" aria-label="Underline" />}>
          <Underline />
        </TooltipTrigger>
        <TooltipContent>Underline</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger render={<Button />}>Save</TooltipTrigger>
        <TooltipContent className="flex items-center gap-2">
          Save changes
          <Kbd aria-label="Command">⌘</Kbd>
          <Kbd>S</Kbd>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
