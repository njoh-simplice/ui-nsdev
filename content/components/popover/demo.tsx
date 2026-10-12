import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="secondary" />}>Notifications</PopoverTrigger>
      <PopoverContent>
        <PopoverTitle>Notifications</PopoverTitle>
        <PopoverDescription>You are all caught up. Good job!</PopoverDescription>
        <PopoverClose render={<Button variant="secondary" className="mt-2 self-start" />}>Dismiss</PopoverClose>
      </PopoverContent>
    </Popover>
  );
}
