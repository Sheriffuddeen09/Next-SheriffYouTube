import { notFound } from "next/navigation"
import FetchLikeId from "../../../../lib/like/FetchLikeId"
import PostIdList from "@/app/like/PostIdList"
import Navbar from "@/app/homepage/components/Navbar"
import PostId from "@/app/like/PostId"
import PostItem from "@/app/like/PostItem"
export const revalidate = 0

type Props = {
    params: {
        id: string
    }
}

export default async function page({ params: { id } }: Props) {

    const post = await FetchLikeId(id)

    if (!post) notFound()

    return (
<section className="overflow-hidden"> 
    <div className="underis">
    <Navbar />
    </div>
        <main className="lg:inline-flex">
        <div className="">
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
