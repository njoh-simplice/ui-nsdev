import { Progress } from "@/components/ui/progress";

export default function ProgressDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Progress value={25} aria-label="Storage used" />
      <Progress value={60} label="Uploading" showValue />
      <Progress value={100} label="Complete" showValue />
      <Progress value={null} label="Loading" />
    </div>
  );
}
