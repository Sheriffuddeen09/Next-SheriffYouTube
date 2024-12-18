import Navbar from "../homepage/components/Navbar";
import Footer from "../homepage/components/Footer";
import SideHomepage from "../homepage/home/SideHompage";
import ShortList from "./ShortList";

export const revalidate = 1

export default async function page() {
  return (
    <section className="overflow-hidden">
    <Navbar />
    <section className="min-h-screen text-base overflow-hidden">
      <div className="flex sm:p-3 p-1 flex-row md:gap-48 lg:gap-96 ">
        <div className="hidden sm:block">
        <SideHomepage />
        </div>
        <ShortList/>
      </div>
      <div className="sm:hidden block">
    <Footer />
    </div>
    </section>
    </section>
  )

}