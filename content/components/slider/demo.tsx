import { Slider } from "@/components/ui/slider";

export default function SliderDemo() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-8">
      <Slider defaultValue={40} label="Volume" />
      <Slider defaultValue={[20, 70]} label="Price" />
      <Slider defaultValue={50} label="Brightness" disabled />
    </div>
  );
}
