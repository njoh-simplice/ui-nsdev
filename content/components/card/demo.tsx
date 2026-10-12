import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const features = ["Up to 10 team members", "Unlimited projects", "Priority support"];

export default function CardDemo() {
  return (
    <Card className="relative w-full max-w-xs overflow-hidden">
      {/* A soft green glow and a bright hairline along the top mark the popular plan. */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-linear-to-b from-accent/10 to-transparent" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent to-transparent" />

      <CardHeader className="relative">
        <div className="flex items-center justify-between gap-3">
          <CardTitle>Pro</CardTitle>
          <Badge variant="success">Popular</Badge>
        </div>
        <CardDescription>For small teams that ship often.</CardDescription>
      </CardHeader>

      <CardContent className="relative flex flex-col gap-5">
        <p className="flex items-baseline gap-1.5">
          <span className="text-5xl leading-none font-bold tracking-tight">$24</span>
          <span className="text-base text-text/70">/ month</span>
        </p>
        <Separator />
        <ul className="flex flex-col gap-3 text-sm text-text/80">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2.5">
              <Check aria-hidden className="size-4 shrink-0 text-accent" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="relative">
        <Button className="flex-1">Get started</Button>
        <Button variant="secondary" className="flex-1">
          Learn more
        </Button>
      </CardFooter>
    </Card>
  );
}
