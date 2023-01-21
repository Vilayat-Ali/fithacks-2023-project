// styles
import "@/styles/globals.css";

// lib
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";

// components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <ChakraProvider>
        <SessionProvider session={session}>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </SessionProvider>
      </ChakraProvider>
    </>
  );
}
