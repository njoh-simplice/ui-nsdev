import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function SwitchDemo() {
  return (
    <>
      <Label>
        <Switch defaultChecked />
        Wi-Fi
      </Label>
      <Label>
        <Switch />
        Bluetooth
      </Label>
      <Label>
        <Switch disabled />
        Location
      </Label>
      <Label>
        <Switch disabled defaultChecked />
        Sync
      </Label>
    </>
  );
}
