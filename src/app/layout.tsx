import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Heaven Furniture Mart | Bespoke Luxury Furniture & Interior Styling",
  description: "Discover luxury and bespoke furniture in Chattogram. Custom-designed sofas, beds, dining tables, and executive office pieces tailored to your taste, size, and space.",
  keywords: ["bespoke furniture", "luxury furniture", "interior styling Chattogram", "custom furniture Bangladesh", "Heaven Furniture Mart", "sofa custom design", "luxury beds", "Agrabad showroom"],
  authors: [{ name: "Heaven Furniture Mart" }],
  openGraph: {
    title: "Heaven Furniture Mart | Bespoke Luxury Furniture",
    description: "Designed. Crafted. Customized. Premium wooden furniture tailored to your lifestyle, custom built for your home in Chattogram.",
    type: "website",
    locale: "en_US",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
