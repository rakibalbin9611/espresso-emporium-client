import { useLoaderData } from "react-router";

const Home = () => {
  const coffees = useLoaderData();
  console.log(coffees);
  return (
    <div>
      <h2>This is home</h2>
    </div>
  );
};

export default Home;
