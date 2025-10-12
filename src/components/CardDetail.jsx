import { Link, useLoaderData } from "react-router";

const CardDetail = () => {
  const coffee = useLoaderData();
  const { name, price, supplier, taste, category, details, photo } = coffee;

  return (
    <div className="my-16 px-4 sm:px-6 lg:px-8">
      {/* Back to Home */}
      <div className="max-w-6xl mx-auto mb-8">
        <Link
          to="/"
          className="flex items-center gap-2 text-lg sm:text-xl text-[#331A15] font-semibold hover:text-[#b58973] transition duration-200"
        >
          <span className="text-2xl">←</span> Back to home
        </Link>
      </div>

      {/* Coffee Details Section */}
      <div className="bg-[#F4F3F0] rounded-2xl p-6 sm:p-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10 shadow-md">
        {/* Left Image */}
        <div className="w-full sm:w-2/3 md:w-1/2 lg:w-[35%] flex justify-center">
          <img
            src={photo}
            alt={name}
            className="w-40 sm:w-56 md:w-60 object-contain"
          />
        </div>

        {/* Right Details */}
        <div className="flex-1 space-y-4 text-[#331A15]">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#3B2F2F] coffee-title">
            Niceties
          </h2>

          <div className="space-y-2 text-base sm:text-lg text-[#1B1A1A] leading-relaxed raleway">
            <p>
              <span className="font-semibold">Name:</span> {name}
            </p>
            <p>
              <span className="font-semibold">Price:</span> {price}
            </p>
            <p>
              <span className="font-semibold">Supplier:</span> {supplier}
            </p>
            <p>
              <span className="font-semibold">Taste:</span> {taste}
            </p>
            <p>
              <span className="font-semibold">Category:</span> {category}
            </p>
            <p>
              <span className="font-semibold">Details:</span> {details}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
