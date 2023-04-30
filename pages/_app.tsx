import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { IBM_Plex_Mono } from "next/font/google";
const plexMono = IBM_Plex_Mono({ weight: "200", subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={plexMono.className}>
      <Component {...pageProps} />
    </div>
  );
}
