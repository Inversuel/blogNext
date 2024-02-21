import Nav from "@/component/nav/nav";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${inter.variable} font-sans min-h-screen overflow-x-hidden`}
    >
      <GoogleAnalytics gaId="G-SWFXX4XCLL" />
      <GoogleTagManager gtmId="GT-WB7XNP9X" />

      <Nav />
      <Component {...pageProps} />
    </main>
  );
}
