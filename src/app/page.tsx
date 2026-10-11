import { Hero } from "@/components/home/hero";
import { Mosaic } from "@/components/home/mosaic";

export default function Page() {
  return (
    <main className="flex-1">
      <Hero />
      <Mosaic />
    </main>
  );
}
