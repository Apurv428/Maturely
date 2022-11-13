import React from "react";
import AboutUs from "../components/AboutUs/AboutUs";
import Choose from "../components/Choose/Choose";
import Header from "../components/Header";
import Hero from '../components/Hero';


function Home() {
  return (
    <div className="text-white">
      <Header />
      <Hero />
      <Choose />
      <AboutUs />
    </div>
  );
}

export default Home;
