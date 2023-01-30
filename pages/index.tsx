import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/films");
  }, [router]);

  return (
    <>
      <Head>
        <title>FilmInc</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />v
      </Head>
      <main style={{ height: "100vh" }}>
        <h1>Logo</h1>
      </main>
    </>
  );
}
