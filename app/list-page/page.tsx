import Brandimages from "@/components/brandimages";
import Footer from "@/components/footer";
import Brands  from "@/components/listpagecomps/brands";
import Cardsec from "@/components/listpagecomps/cardsection";
import Shop from "@/components/listpagecomps/shop";
import { Navbar } from "@/components/navbar";
import { Topheader } from "@/components/topheader";

export default  function Home (){
    return (
        <div>
            <Topheader/>
            <Navbar />
            <Shop />
            <Brands />
            <div className="lg:hidden block">
            <Cardsec />
            </div>
            <Brandimages />
            <Footer />
           <div className="hidden lg:block">
            <Cardsec />
            </div>
        </div>
    )
}