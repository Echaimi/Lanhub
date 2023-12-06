import { useRouter } from 'next/router';
import Image from 'next/image';
import Header from "../components/Header";
import Footer from '../components/Footer';
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../components/SingleMap"), {
    loading: () => "LoadingLoading...",
    ssr: false,
  });

  
function Details() {
  const router = useRouter();
  const { img, title, location, description, star, price, total, long, lat } = router.query;
  const imageUrl = img ? decodeURIComponent(img) : null;

  // Convert long and lat to numbers
  const longitude = parseFloat(long);
  const latitude = parseFloat(lat);
  console.log(longitude)
  console.log(latitude)

  return (
    <div>
      <Header />
      <div className="w-full mx-auto px-8 sm:px-16 max-w-7xl pt-6 pb-6 overflow-hidden relative">
        <div>
          <div className="text-2xl font-bold">{title}</div>
          <div className="font-light text-gray-700 pb-4 mt-2">
            {decodeURIComponent(location)}
            <strong className="ml-2">Rating:</strong> {star}
          </div>
        </div>
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={title}
            width={500}
            height={300}
            layout="responsive"
            className="rounded-xl max-w-700"
          />
        )}
        <div className=" mt-4">
          <div className='mb-2 flex justify-between'>
            <p className='font-bold mb-2'>Hosted by :</p>
            <div className='min-w-max'>
            <span className="font-medium"><strong>Price:</strong> {price}</span>
            <span className="font-medium ml-1"> {total}</span>
          </div>
          </div>
          
          <p className='font-light mb-4'>{description}</p>

        </div>
        <section className="xl:inline-flex xl:min-w-[600px] h-[400px]">
        <Map long={longitude} lat={latitude} title={title} img={imageUrl} />
        </section>

      </div>
      <Footer/>
    </div>
  );
}

export default Details;
