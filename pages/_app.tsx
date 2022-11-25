import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "../styles/globals.css";
import queryClient from "../lib/query";
import type { AppProps } from "next/app";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>KMUTT BookStore</title>
        <meta name="description" content="Kmutt Bookstore" />
        <meta property="og:image" content="/Banner.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="font-body dark:bg-gray-800 w-full">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </QueryClientProvider>
  );
}
