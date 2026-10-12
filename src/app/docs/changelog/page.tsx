import type { Metadata } from "next";
import { DocPage } from "@/components/doc-page";

export const metadata: Metadata = { title: "Changelog" };

export default function Page() {
  return <DocPage title="Changelog" />;
}
