import { Marker } from "@/components/ui/marker";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function MarkerDemo() {
  return (
    <>
      <Marker size="sm" aria-label="Small marker" />
      <Marker aria-label="Marker" />
      <Marker size="lg" aria-label="Large marker" />
      <Popover>
        <PopoverTrigger render={<Marker aria-label="Handlebars" />} />
        <PopoverContent>
          <PopoverTitle>Handlebars</PopoverTitle>
          <PopoverDescription>A wide, flat bar with lock-on grips.</PopoverDescription>
        </PopoverContent>
      </Popover>
      <Marker aria-label="Disabled marker" disabled />
    </>
  );
}
