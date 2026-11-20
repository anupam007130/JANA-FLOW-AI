import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Jana Flow AI — Turn Ideas Into Cinema", description: "Create cinematic AI videos and images in one creative workspace." };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }