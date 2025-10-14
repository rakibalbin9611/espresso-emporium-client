import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router";

const Authlayout = () => {
  return (
    <div>
      <Header></Header>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Authlayout;
