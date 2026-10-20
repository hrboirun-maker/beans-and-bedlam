import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Beans & Bedlam Pet Co. | Big Love. Little Paws. Occasional Chaos.",
  description: "Thoughtful pet care printables, emergency binders, and happy little finds for devoted pet people.",
  verification: {
    other: {
      "p:domain_verify": "22cfc49bcf9223a2d6682f2525f79f91",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <html lang="en"><body>{children}</body></html>;
}
