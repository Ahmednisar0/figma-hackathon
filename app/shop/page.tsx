import Brandimages from "@/components/brandimages";
import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import Bestsellers from "@/components/shop-comps/bestseller";
import Herosec from "@/components/shop-comps/herosec";
import Herosectwo from "@/components/shop-comps/herosectwo";
import { Topheader } from "@/components/topheader";

export default  function Home (){
    return (
        <div>
            <Topheader/>
            <Navbar />
            <Herosec />
          <Herosectwo />
         <Bestsellers />
            
            <Brandimages />
            <Footer />


        </div>
    )
}