import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/placeholder-page";

export const metadata: Metadata = { title: "Components" };

export default function Page() {
  return <PlaceholderPage title="Components" />;
}
