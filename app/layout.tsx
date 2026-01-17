import type { Metadata } from "next";
import { Georama, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import BottomDock from "@/components/layout/BottomDock";
import { ThemeProvider } from "@/components/wrappers/ThemeProvider";

const geoSans = Georama({
  variable: "--font-georama",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shaik Mohammad Shahbaaz Alam | Personal Portfolio V2",
  description:
    "Second Iteration of my personal portfolio based on the Mac OS like Theme",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geoSans.variable} ${robotoMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <BottomDock />
        </ThemeProvider>
      </body>
    </html>
  );
}
