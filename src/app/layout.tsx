import type { Metadata, Viewport } from "next";
import { Geist_Mono, Host_Grotesk } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteChrome } from "@/components/site-chrome";
import { SiteHeader } from "@/components/site-header";
import { ToastProvider } from "@/components/ui/toast";
import { GOOGLE_SITE_VERIFICATION, SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const hostGrotesk = Host_Grotesk({
  variable: "--font-host-grotesk",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// The picture shown when a link to the site is shared (Open Graph, which most networks read, and
// the large Twitter/X card). It is 2048x1152 with its text in the middle, so it survives the
// crop each network makes. Every page inherits it, as long as no page sets its own `openGraph`.
const SHARE_IMAGE = {
  url: "/assets/images/banner.png",
  width: 2048,
  height: 1152,
  alt: "Building my perfect imperfections",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  verification: { google: GOOGLE_SITE_VERIFICATION },
  title: {
    default: "nsdev/ui | Own every Pixel of your Design System",
    template: "%s - nsdev/ui",
  },
  description:
    "A component library built on Base UI and Tailwind. Every component ships fully styled — swap in your own tokens.",
  openGraph: { type: "website", siteName: SITE_NAME, images: [SHARE_IMAGE] },
  twitter: { card: "summary_large_image", images: [SHARE_IMAGE] },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${hostGrotesk.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ToastProvider>
          <SiteChrome header={<SiteHeader />} footer={<SiteFooter />}>
            {children}
          </SiteChrome>
        </ToastProvider>
      </body>
    </html>
  );
}
