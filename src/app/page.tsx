import Navbar from "./homepage/components/Navbar";
import Footer from "./homepage/components/Footer";
import HomePage from "./homepage/home/Home";
import SideHomepage from "./homepage/home/SideHompage";

export const revalidate = 1

export default async function page() {
  return (
    <section className="overflow-hidden">
    <Navbar />
    <section className="min-h-screen text-base">
      <div className="flex p-3 flex-row gap-16 ">
        <div className="hidden sm:block">
        <SideHomepage />
        </div>
        <HomePage />
        <div>
        </div>
      </div>
      <div className="sm:hidden block">
    <Footer />
    </div>
    </section>
    </section>
  )

}