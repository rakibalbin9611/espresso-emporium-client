import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <main>
        <div className="">
          <Outlet></Outlet>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Root;
