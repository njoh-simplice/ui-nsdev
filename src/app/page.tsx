import { Hero } from "@/components/home/hero";
import { Mosaic } from "@/components/home/mosaic";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Mosaic />
      </main>
      <SiteFooter />
    </>
  );
}
