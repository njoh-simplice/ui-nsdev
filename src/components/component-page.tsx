import type { ReactNode } from "react";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { DocPage } from "@/components/doc-page";
import { readSource } from "@/lib/source";

export type PropRow = {
  name: string;
  type: string;
  default?: string;
  description: ReactNode;
};

// One line of a section: a bold label and the sentence that follows it. Labels carry their own
// punctuation, so write "Size:" or "Built on Base UI." as you want it shown.
export type Note = { label: string; text: ReactNode };

export type Section = { intro?: ReactNode; notes: Note[] };

function Notes({ notes }: { notes: Note[] }) {
  return (
    <ul>
      {notes.map(({ label, text }) => (
        <li key={label}>
          <strong>{label}</strong> {text}
        </li>
      ))}
    </ul>
  );
}

// The page every component shares: title and lead, a live preview with its code, then five
// sections (The code, The thinking, Interface design, Interaction, Empathy). Both code views are
// read from the real files, so what is shown is what renders.
export async function ComponentPage({
  title,
  lead,
  demo,
  demoPath,
  sourcePath,
  props,
  propsNote,
  thinking,
  design,
  interaction,
  empathy,
}: {
  title: string;
  lead: ReactNode;
  demo: ReactNode;
  demoPath: string;
  sourcePath: string;
  props: PropRow[];
  propsNote?: ReactNode;
  thinking: Section;
  design: Section;
  interaction: Section;
  empathy: Section;
}) {
  const demoSource = readSource(demoPath);
  const componentSource = readSource(sourcePath);

  return (
    <DocPage title={title}>
      <p className="lead">{lead}</p>

      <ComponentPreview source={demoSource}>{demo}</ComponentPreview>

      <h2 id="the-code">The code</h2>
      <p>
        The component is a single file, read from the repository when the site is built. Press
        Show code to see all of it.
      </p>
      <CodeBlock code={componentSource} lang="tsx" />
      <h3>Props</h3>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th scope="col">Prop</th>
              <th scope="col">Type</th>
              <th scope="col">Default</th>
              <th scope="col">What it does</th>
            </tr>
          </thead>
          <tbody>
            {props.map((row) => (
              <tr key={row.name}>
                <td className="whitespace-nowrap">
                  <code>{row.name}</code>
                </td>
                <td data-label="Type">
                  <code>{row.type}</code>
                </td>
                <td data-label="Default">{row.default ? <code>{row.default}</code> : "—"}</td>
                <td data-label="Use">{row.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {propsNote && <p>{propsNote}</p>}

      <h2 id="the-thinking">The thinking</h2>
      {thinking.intro && <p>{thinking.intro}</p>}
      <Notes notes={thinking.notes} />

      <h2 id="interface-design">Interface design</h2>
      {design.intro && <p>{design.intro}</p>}
      <Notes notes={design.notes} />

      <h2 id="interaction">Interaction</h2>
      {interaction.intro && <p>{interaction.intro}</p>}
      <Notes notes={interaction.notes} />

      <h2 id="empathy">Empathy</h2>
      {empathy.intro && <p>{empathy.intro}</p>}
      <Notes notes={empathy.notes} />
    </DocPage>
  );
}
