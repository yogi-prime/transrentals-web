import "./globals.css";
import type { Metadata } from "next";
import { SearchUIProvider } from "@/components/providers/SearchUIContext";

export const metadata: Metadata = { title: "TransRentals" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <SearchUIProvider>{children}</SearchUIProvider>
      </body>
    </html>
  );
}
