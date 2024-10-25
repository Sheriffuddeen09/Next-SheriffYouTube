import { notFound } from "next/navigation"
import FetchYousId from "../../../../lib/you/FetchYouId"
import PostIdList from "@/app/you/PostIdList"
import Navbar from "@/app/homepage/components/Navbar"
import PostId from "@/app/you/PostId"
import PostItem from "@/app/you/PostItem"
export const revalidate = 0

type Props = {
    params: {
        id: string
    }
}

export default async function page({ params: { id } }: Props) {

    const post = await FetchYousId(id)

    if (!post) notFound()

    return (
<section className="overflow-hidden"> 
    <div className="underis">
    <Navbar />
    </div>
        <main className="lg:inline-flex">
        <div className="-translate-y-10 sm:translate-y-24">
            <PostId {...post}  />
            <PostItem   />
            
        </div>
            <PostIdList />
        </main>
</section>
    )
}