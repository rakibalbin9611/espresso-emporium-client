import { Link, useLoaderData } from "react-router";
import CoffeeCard from "./CoffeeCard";
import Banner from "./Banner";
import FeatureSection from "./FeaturesSec";

const Home = () => {
  const coffees = useLoaderData();
  // console.log(coffees);
  return (
    <>
      <Banner></Banner>
      <FeatureSection></FeatureSection>
      <div className="my-20 max-w-7xl mx-auto">
        <div className="text-center px-4 mt-20  spacey-3">
          <p className="text-xl text-[#1B1A1A]">--- Sip & Savor ---</p>
          <h2 className="text-6xl font-regular text-[#331A1]">
            Our Popular Products
          </h2>
          <Link to={"/addCoffee"}>
            <button
              className="btn border-0 bg-[#E3B577] rounded-md
          text-[#2e1c0f] hover:bg-[#d8a85e] mt-4 px-6"
            >
              Add coffee
            </button>
          </Link>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 px-4 mt-12">
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
