"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/toast";

const steps = ["Pick your colors", "Add a component", "Preview a block", "Ship it"];

// A checklist whose bar follows the boxes. Ticking the last one shows a toast.
export function ChecklistTile() {
  const toast = useToast();
  const [done, setDone] = useState<string[]>(steps.slice(0, 2));

  const change = (step: string, checked: boolean) => {
    const next = checked ? [...done, step] : done.filter((item) => item !== step);
    setDone(next);
    if (next.length === steps.length) toast.add({ type: "success", title: "Ready to launch", description: "Every step is done." });
  };

  return (
    <div className="flex w-full flex-col gap-4">
      <Progress value={(done.length / steps.length) * 100} label="Launch checklist" showValue />
      <ul className="flex flex-col gap-2">
        {steps.map((step) => (
          <li key={step}>
            <Label>
              <Checkbox checked={done.includes(step)} onCheckedChange={(checked) => change(step, checked)} />
              {step}
            </Label>
          </li>
        ))}
      </ul>
    </div>
  );
}
