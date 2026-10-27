import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { ScrambleOnHover } from "@/components/ui/scramble-on-hover";
import { ScrambleOnLoad } from "@/components/ui/scramble-on-load";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { focusRing } from "@/lib/styles";
import CardMenu from "@content/blocks/card-menu/demo";

// The live tiles of the home page mosaic. Each is built from the library's own components, sized
// to fit its tile at every width the mosaic has (the narrowest is about 250px of room).

// The first tile is the Card Menu block itself, on the page background (no picture) so it
// matches the rest of the site. Its section is stretched to the tile, where on its own page it
// fills the screen.
export function NavigationTile() {
  return (
    <div className="size-full *:h-full *:min-h-0">
      <CardMenu image={false} />
    </div>
  );
}

export function AccordionTile() {
  return (
    <Accordion defaultValue={["colors"]}>
      <AccordionItem value="what">
        <AccordionTrigger>What is nsdev/ui?</AccordionTrigger>
        <AccordionContent>Components on Base UI, styled with Tailwind.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="colors">
        <AccordionTrigger>Can I change the colors?</AccordionTrigger>
        <AccordionContent>Yes. Every color is a theme token.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="access">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>Keyboards and screen readers work out of the box.</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export function TabsTile() {
  return (
    <Tabs defaultValue="design">
      <TabsList>
        <TabsTrigger value="design">Design</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
        <TabsTrigger value="notes">Notes</TabsTrigger>
      </TabsList>
      <TabsContent value="design">Tokens for color, type and radius.</TabsContent>
      <TabsContent value="code">Every demo shows its real source.</TabsContent>
      <TabsContent value="notes">Thinking, interaction and accessibility.</TabsContent>
    </Tabs>
  );
}

const plans = [
  { label: "Free", value: "free" },
  { label: "Pro", value: "pro" },
  { label: "Team", value: "team" },
];

export function FormTile() {
  return (
    <div className="flex w-full flex-col gap-4">
      <Field name="email">
        <FieldLabel>Email</FieldLabel>
        <Input type="email" autoComplete="off" placeholder="you@example.com" />
      </Field>
      <Field name="plan">
        <FieldLabel>Plan</FieldLabel>
        <Select items={plans} defaultValue="pro">
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {plans.map((plan) => (
              <SelectItem key={plan.value} value={plan.value}>
                {plan.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>
      <Label className="w-full justify-between">
        Notifications
        <Switch defaultChecked />
      </Label>
      <Slider defaultValue={40} label="Volume" />
    </div>
  );
}

const link = `rounded-sm text-3xl leading-tight font-semibold uppercase text-text-secondary transition-colors hover:text-text ${focusRing}`;

export function TextTile() {
  return (
    <div className="flex w-full flex-col items-start gap-5">
      <ScrambleOnLoad render={<h3 className="text-2xl leading-tight font-bold tracking-tight" />}>
        Own every pixel
      </ScrambleOnLoad>
      <div className="flex flex-col gap-1">
        {[
          { label: "Components", href: "/components" },
          { label: "Blocks", href: "/blocks" },
          { label: "Docs", href: "/docs" },
        ].map(({ label, href }) => (
          <ScrambleOnHover key={label} render={<a href={href} className={link} />}>
            {label}
          </ScrambleOnHover>
        ))}
      </div>
    </div>
  );
}

const face = "origin-[50%_38%] translate-y-[12%] scale-150 saturate-20";

export function StatusTile() {
  return (
    <div className="flex w-full flex-col gap-3">
      <Alert variant="success">
        <AlertTitle>Deploy succeeded</AlertTitle>
        <AlertDescription>All checks passed.</AlertDescription>
      </Alert>
      <Progress value={72} label="Build" showValue />
      <div className="flex items-center justify-between gap-3">
        <div className="flex gap-1.5">
          <Badge variant="success">Ready</Badge>
          <Badge variant="warning">3 queued</Badge>
        </div>
        <AvatarGroup size="sm" aria-label="Njoh Simplice Junior with Claude">
          <Avatar>
            <AvatarImage src="/assets/images/profile.webp" alt="" className={face} />
            <AvatarFallback>NS</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="/assets/images/claude-ai-icon.webp" alt="" />
            <AvatarFallback>C</AvatarFallback>
          </Avatar>
        </AvatarGroup>
      </div>
    </div>
  );
}
