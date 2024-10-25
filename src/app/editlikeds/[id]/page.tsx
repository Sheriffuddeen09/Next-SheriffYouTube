import { notFound } from "next/navigation"
import PostIdList from "@/app/like/PostIdList"
import Navbar from "@/app/homepage/components/Navbar"
import PostId from "@/app/like/PostId"
import PostItem from "@/app/like/PostItem"
import FetchLikedsId from "../../../../lib/likeds/FetchLikedsId"
export const revalidate = 0

type Props = {
    params: {
        id: string
    }
}

export default async function page({ params: { id } }: Props) {

    const post = await FetchLikedsId(id)

    if (!post) notFound()

    return (
<section className="overflow-hidden"> 
    <div className="underis">
    <Navbar />
    </div>
        <main className="lg:inline-flex">
        <div className="-translate-y-10 sm:translate-y-24">
            <PostId  {...post}  />
            <PostItem   />
            
        </div>
        <div>
        <PostIdList />
        </div>
        </main>
</section>
    )
}
