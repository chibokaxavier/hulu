import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Head from "next/head";
import Nav from "@/components/Nav";
import Results from "@/components/Results";
import requests from "@/utils/requests";

const inter = Inter({ subsets: ["latin"] });

export default function Home({results}) {
  return (
    <>
      <Head>
        <title>Hulu</title>
      </Head>
      <Header />
      <Nav />
      <Results results={results} />
    </>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const request = await fetch(
    `https://api.tmdb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
}
