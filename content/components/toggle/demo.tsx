import { Bold, Italic, VolumeX } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";

export default function ToggleDemo() {
  return (
    <>
      <Toggle size="icon" aria-label="Bold">
        <Bold />
      </Toggle>
      <Toggle size="icon" aria-label="Italic" defaultPressed>
        <Italic />
      </Toggle>
      <Toggle>
        Mute
        <VolumeX />
      </Toggle>
      <Toggle defaultPressed>
        Mute
        <VolumeX />
      </Toggle>
      <Toggle disabled>Disabled</Toggle>
    </>
  );
}
