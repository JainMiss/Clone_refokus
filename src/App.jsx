import React from "react";
import Navbar from "./Components/Navbar";
import Work from "./Components/Work";
import Stripes from "./Components/Stripes";
import Products from "./Components/Products";
import Marquees from "./Components/Marquees";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";


import LocomotiveScroll from 'locomotive-scroll';
function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="max-w-screen-2xl bg-zinc-900 text-white ">
      <Navbar />
      <Work /> 
      {/*  work ka tailwind dekhna hai  */}
      <Stripes />
      {/*  stripes ka tailwind responsive ho gya hai  and will have to start from the app.jsx */}
      <Products />
      <Marquees />
      <Cards />
      <Footer  />
    </div>
  );
}

export default App;
