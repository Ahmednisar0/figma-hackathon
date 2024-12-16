import Brands from "@/components/aboutcomps/brands";
import Herosec2 from "@/components/aboutcomps/herosec2";
import Herosec3 from "@/components/aboutcomps/herosec3";
import Herosec from "@/components/aboutcomps/herosection";
import Last from "@/components/aboutcomps/lastcomp";
import Team from "@/components/aboutcomps/team";
import Thepic from "@/components/aboutcomps/thepic";
import Navbar from "@/components/contactuscomps/navbar";
import Footer from "@/components/footer";
import React from "react";

const Home = () => {
  return (<div>
    <Navbar />
    <Herosec />
    <Herosec2 />
    <Herosec3 />
    <Thepic />
    <Team />
    <Brands />
    <Last />
    <Footer/>
    </div>
  );
};

export default Home;
