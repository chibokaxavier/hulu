import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Head from "next/head";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Hulu</title>
      </Head>
      <Header/>
    <Nav/>
      {/* Results */}
    </>
  );
}
