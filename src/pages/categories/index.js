import Head from "next/head";
import Navigation from "../../components/navigation/Navigation";
import Footer from "../../components/Footer";
import FilterPage from "../../components/filter/FilterPage";

export default function films() {
  const submitHandler = () => {};

  return (
    <>
      <Head>
        <title>FilmInc</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navigation />
        <FilterPage />
        <Footer />
      </main>
    </>
  );
}
