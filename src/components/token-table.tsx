import type { ThemeToken } from "@/lib/theme";

// Token | Value | What it is for. Values come from the theme file; the descriptions are
// written by hand, so a token with no description still shows up (with a dash).
export function TokenTable({
  tokens,
  notes,
  swatch = false,
  wrapValue = false,
}: {
  tokens: ThemeToken[];
  notes: Record<string, string>;
  swatch?: boolean;
  wrapValue?: boolean; // let long values (like font stacks) wrap instead of scrolling
}) {
  return (
    <div className="overflow-x-auto">
      <table>
        <thead>
          <tr>
            <th scope="col">Token</th>
            <th scope="col">Value</th>
            <th scope="col">What it is for</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map(({ name, value }) => (
            <tr key={name}>
              <td className="whitespace-nowrap">
                <code>--{name}</code>
              </td>
              <td data-label="Value" className={wrapValue ? undefined : "whitespace-nowrap"}>
                {swatch && (
                  <span
                    aria-hidden
                    className="mr-2 inline-block size-3 rounded-sm border border-border-strong align-middle"
                    style={{ background: value }}
                  />
                )}
                <span className={wrapValue ? "font-mono text-[0.875em] break-words" : "align-middle"}>{value}</span>
              </td>
              <td data-label="Use">{notes[name] ?? "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
