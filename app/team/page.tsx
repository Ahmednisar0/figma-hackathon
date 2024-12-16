import Navbar from "@/components/contactuscomps/navbar";
import Footer from "@/components/footer";
import Herosecteam from "@/components/team-comps/herosection";
import Images from "@/components/team-comps/images";
import Team from "@/components/team-comps/ourteam";
import Wecant from "@/components/team-comps/wecant";

export default  function Home (){
    return (
        <div>
        <Navbar/>
        <Herosecteam />
        <Images />
        <Team />
        <Wecant />
        <Footer />
        </div>
    )
}