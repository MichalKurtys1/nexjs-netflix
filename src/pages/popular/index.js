import Head from "next/head";
import PopularSection from "../../components/PopularSection";
import Footer from "../../components/Footer";
import Navigation from "../../components/navigation/Navigation";

import { gql } from "@apollo/client";
import { client } from "../../lib/apolloClient";

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Query {
        getPopular {
          films {
            title
            description
            director
            scenario
            genre
            production
            premiere
            miniature
            content
            duration
            like
            dislike
            id
          }
        }
      }
    `,
  });

  let films = data.getPopular.films.slice(0, 10);
  let series = data.getPopular.films.slice(0, 10);
  let both = films.concat(series);
  both = both.sort((a, b) => b.like - a.like).slice(0, 10);

  return {
    props: {
      films: data.getPopular.films.slice(0, 10),
      series: data.getPopular.films.slice(0, 10),
      both: both,
    },
  };
}

export default function popular({ films, series, both }) {
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
        <PopularSection films={films} series={series} both={both} />
        <Footer />
      </main>
    </>
  );
}
