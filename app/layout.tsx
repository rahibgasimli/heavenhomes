import { DM_Sans, Inter, Plus_Jakarta_Sans } from "next/font/google";
import "../styles/index.css";
import cn from "classnames";
import localFont from "next/font/local";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

const authorSemibold = localFont({
  src: "../public/fonts/Author-Semibold.otf",
  weight: "600",
  variable: "--font-author-semibold",
});

export const metadata = {
  title: "MR Bauunternehmen – Meisterbetrieb in Herborn | Bau & Sanierung",
  description:
    "Ihr zuverlässiger Meisterbetrieb in Herborn, Lahn-Dill-Kreis. Hoch- und Tiefbau, Sanierung, Renovierung und Garten- & Landschaftsbau. 5/5 Sterne auf MyHammer. Jetzt Angebot anfragen!",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="de">
      <body
        className={cn(
          inter.variable,
          dmSans.variable,
          plusJakartaSans.variable,
          authorSemibold.variable,
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
