import { Kbd, KbdGroup } from "@/components/ui/kbd";

export default function KbdDemo() {
  return (
    <>
      <KbdGroup>
        <Kbd aria-label="Command">⌘</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <Kbd>C</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>Shift</Kbd>
        <Kbd>Tab</Kbd>
      </KbdGroup>
      <Kbd>Enter</Kbd>
      <Kbd>Esc</Kbd>
    </>
  );
}
