import Navbar from "../../homepage/components/Navbar";
import Footer from "../../homepage/components/Footer";
import SideHomepage from "../../homepage/home/SideHompage";
import FetchHideid from "../../../../lib/subscribe/FetchHideid";
import { notFound } from "next/navigation";
import ShortItem from "@/app/subscribe/ShortItem";

export const revalidate = 0

type Props = {
    params: {
        id: string
    }
}

export default async function page({ params: { id } }: Props) {

    const short = await FetchHideid(id)

    if (!short) notFound()


  return (
    <section>
    <Navbar />
    <section className="min-h-screen text-base">
      <div className="flex p-3 flex-row md:gap-48 lg:gap-96 ">
        <div className="hidden sm:block">
        <SideHomepage />
        </div>
        <ShortItem {...short}/>
      </div>
      <div className="sm:hidden block">
    <Footer />
    </div>
    </section>
    </section>
  )

}