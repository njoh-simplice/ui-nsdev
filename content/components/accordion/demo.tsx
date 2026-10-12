import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function AccordionDemo() {
  return (
    <Accordion defaultValue={["colors"]} className="max-w-md">
      <AccordionItem value="what">
        <AccordionTrigger>What is nsdev/ui?</AccordionTrigger>
        <AccordionContent>
          A set of components built on Base UI and styled with Tailwind. The code is yours to read
          and change.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="colors">
        <AccordionTrigger>Can I change the colors?</AccordionTrigger>
        <AccordionContent>
          Yes. Every color comes from a theme token, so changing a token restyles every component.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="access">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Base UI handles the keyboard and screen reader behavior, and the styles keep a visible
          focus ring.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="soon" disabled>
        <AccordionTrigger>Coming soon</AccordionTrigger>
        <AccordionContent>This section is not available yet.</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
