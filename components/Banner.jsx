import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        alt="hero-banner-img"
        src="/heroBanner.png"
        fill={true}
        style={{
          objectFit: 'fill',
        }}
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-xs  font-black	">Ready for an Epic LAN Party ?</p>
    
        <button className=" px-10 py-4 my-3 font-bold bg-black shadow-md rounded text-white active:scale-90 transition duration-150 transform">
        Dive in Your Lan
        </button>

      </div>
    </div>
  );
}

export default Banner;
