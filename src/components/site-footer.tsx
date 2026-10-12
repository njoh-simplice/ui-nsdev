import { AUTHOR_URL, GITHUB_URL } from "@/lib/site";

const link =
  "rounded-sm font-semibold text-text outline-hidden transition-colors hover:text-text/60 focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-offset-2 focus-visible:outline-text";

export function SiteFooter() {
  return (
    <footer className="mt-24 pb-14 text-center text-base text-text-secondary lg:mt-36">
      <p className="px-6">
        Built by{" "}
        <a href={AUTHOR_URL} className={link}>
          Njoh Simplice Junior.
        </a>{" "}
        The source code is available on{" "}
        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className={link}>
          GitHub.
        </a>
      </p>
    </footer>
  );
}
