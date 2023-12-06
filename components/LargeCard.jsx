import Image from "next/image";

function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          alt="L-Card-img"
          src={img}
          fill={true}
          className="rounded-2xl"
          style={{
            objectFit: "cover",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 rounded-2xl"></div>
      </div>
      <div className="absolute top-32 left-12 text-white p-4 backdrop-filter  rounded-lg">
        <h3 className="text-4xl mb-3 w-64 font-bold">{title}</h3>
        <p className="text-lg">{description}</p>
        <button className="text-sm text-white bg-gray-800 rounded shadow-md  px-4 py-2 mt-5 active:scale-90 transition duration-150 transform hover:shadow-xl">
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default LargeCard;
