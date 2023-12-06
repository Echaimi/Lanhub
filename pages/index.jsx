import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import Footer from "../components/Footer";
import { useRouter } from "next/dist/client/router";
import exploreData from '../data/exploreData.json';
import cardsData from '../data/cardData.json'

export default function Home({ exploreData, cardsData }) {
  const router = useRouter();
  const handleCardClick = (location) => {
    router.push(`/search?location=${encodeURIComponent(location)}`);
  };
  return (
    <div>
      <Head>
        <title>LanHub</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="mx-auto px-8 sm:px-16 max-w-7xl">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore City</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData.map(({ img, distance, location }) => (
              <SmallCard
                key={img}
                img={img}
                distance={distance}
                location={location}
                onClick={() => handleCardClick(location)}
               />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} onClick={() => handleCardClick(title)}/>
            ))}
          </div>
        </section>

        <LargeCard
          img="/gamingHouse.png"
          title="The Greatest Outdoors"
          description="Wishlists curated by LanHub."
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  // const exploreData = await fetch("").then(
  //   (res) => res.json()
  // );

  // const cardsData = await fetch("").then((res) =>
  //   res.json()
  // );

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
