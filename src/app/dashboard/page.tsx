import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/placeholder-page";

export const metadata: Metadata = { title: "Dashboard" };

export default function Page() {
  return <PlaceholderPage title="Dashboard" />;
}
