import Navbar from "../homepage/components/Navbar";
import Footer from "../homepage/components/Footer";
import HomeViewYou from "./HomeYou";
import SideHomepage from "../homepage/home/SideHompage";

export const revalidate = 1

export default async function page() {
  return (
    <section>
    <Navbar />
    <section className="min-h-screen text-base">
      <div className="flex px-4 py-3 flex-row gap-10 ">
        <div className="hidden sm:block">
        <SideHomepage />
        </div>
        <HomeViewYou />
      </div>
      <div className="sm:hidden block">
    <Footer />
    </div>
    </section>
    </section>
  )

}