import { useRouter } from "next/dist/client/router";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import { format } from "date-fns";
import dynamic from "next/dynamic";
import Footer from "../components/Footer";
import searchResults from "../data/searchResults.json"

const Map = dynamic(() => import("../components/Map"), {
  loading: () => "LoadingLoading...",
  ssr: false,
});

function Search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;

  const formattedStartDate = startDate ? format(new Date(startDate), "dd MMMM yy") : 'Start Date';
  const formattedEndDate = endDate ? format(new Date(endDate), "dd MMMM yy") : 'End Date';
  const range = startDate && endDate ? `${formattedStartDate} - ${formattedEndDate}` : 'Select Dates';
  
  const searchTerm = location.toLowerCase();
  const filteredSearchResults = searchResults.filter(result => 
    result.location.toLowerCase().includes(searchTerm) ||
    result.description.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="h-screen">
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ stays - {range} - {noOfGuests} guests{" "}
          </p>

          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>
          <div className="flex flex-col">
            {filteredSearchResults.map(
              ({ img, location, title, description, star, price, total,long ,lat}) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                  long={long}
                  lat={lat}

                />
              )
            )}
          </div>
          
        </section>

        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <Map searchResults={filteredSearchResults} />
        </section>
      </main>

      <Footer />
    </div>
  );

}

export default Search;

export async function getServerSideProps() {
  // const searchResults = await fetch("").then(
  //   (res) => res.json()
  // );
  return {
    props: {

      searchResults,
    },
  };

}
