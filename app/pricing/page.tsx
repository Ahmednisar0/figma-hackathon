import Navbar from "@/components/contactuscomps/navbar";
import Footer from "@/components/footer";
import Faqs from "@/components/pricingcomps/faqs";
import Herosec from "@/components/pricingcomps/herosection";
import Pricing from "@/components/pricingcomps/pricing";
import Wecant from "@/components/team-comps/wecant";

export default function Home() {
    return(
        <div>
            <Navbar />
            <Herosec />
            <Pricing />
            <Faqs />
            <Wecant />
            <Footer />


        </div>
    )
}