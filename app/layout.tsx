import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
 title: "Beans & Bedlam Pet Co. | Big Love. Little Paws. Occasional Chaos.",
 description: "Thoughtful pet care printables, emergency binders, and happy little finds for devoted pet people."
};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body>{children}</body></html>}
