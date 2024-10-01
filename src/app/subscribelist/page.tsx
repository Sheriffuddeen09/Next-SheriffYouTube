import Navbar from "../homepage/components/Navbar";
import SideHomepage from "../homepage/home/SideHompage";
import Subscribes from "./Subscribes";
import SubscribePage from "./SubscribePage";
import ShortHide from "./ShortHide";
import Footer from "../homepage/components/Footer";



export default async function page() {

 

  return (
    <section className="overflow-hidden">
    <Navbar />
    <section className="min-h-screen text-base">
      <div className="flex p-3 flex-row gap-40 ">
        <div className="hidden sm:block">
        <SideHomepage />
        </div>
      <div>
      <Subscribes />
      
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