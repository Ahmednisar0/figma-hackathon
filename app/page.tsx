import Bestseller from "@/components/bestseller";
import Editors from "@/components/editor";
import Footer from "@/components/footer";

import { Navbar } from "@/components/navbar";
import Collection from "@/components/newcollection";
import Partofneutralsection from "@/components/partofneutralsection";
import { Hometopheader } from "@/components/topheader";
import Posts from "@/components/trendingpost";
import Classicproduct from "@/components/vitaclassicproduct";


export default function Home() {
  return (<>
    <Hometopheader />
    <Navbar  />
    <Collection />
    <Editors/>
    <Bestseller/>
    <Classicproduct />
    <Partofneutralsection/>
    <Posts />
    <Footer />
    
    </>
  );
}
