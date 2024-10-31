import Navbar from "../homepage/components/Navbar";
import Footer from "../homepage/components/Footer";
import SideHomepage from "../homepage/home/SideHompage";
import Subscribe from "./Subscribe";
import SubscribePage from "./SubscribePage";
import ShortHide from "./ShortHide";



export default function page() {

 

  return (
    <section className="overflow-hidden">
    <Navbar />
    <section className="min-h-screen text-base">
      <div className="flex p-4 flex-row gap-16 ">
        <div className="hidden sm:block">
        <SideHomepage />
        </div>
      <div>
      <Subscribe />
      
      <div>
        <ShortHide />
      </div>
      <div>
        <SubscribePage />
      </div>
      </div>

      </div>
      <div className="sm:hidden block">
    <Footer />
    </div>
    </section>
    </section>
  )

}