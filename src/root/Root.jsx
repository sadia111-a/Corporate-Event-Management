import { Outlet } from "react-router-dom";

import Footer from "../footer/Footer";

import Navbar from "../Navbar/Navbar";

const Root = () => {
  return (
    <div className="max-w-6xl mx-auto font-poppins">
      <Navbar></Navbar>

      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
