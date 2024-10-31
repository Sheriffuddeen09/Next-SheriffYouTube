import { notFound } from "next/navigation"
import FetchWatchId from "../../../../lib/watch/FetchWatchId"
import PostIdList from "@/app/watch/PostIdList"
import Navbar from "@/app/homepage/components/Navbar"
import PostIdt from "@/app/watch/PostIdt"
import PostItem from "@/app/watch/PostItem"
import PostIdSecond from "@/app/watch/PostIdSecond"
export const revalidate = 0

type Props = {
    params: {
        id: string
    }
}

export default async function page({ params: { id } }: Props) {

    const post = await FetchWatchId(id)

    if (!post) notFound()

    return (
<section className="overflow-hidden"> 
    <div className="underis">
    <Navbar />
    </div>
        <main className="lg:inline-flex -translate-y-2">
        <div className="sm:-translate-y-0  -translate-y-32">
            <PostIdt  {...post}  />
            <PostItem   />
            
        </div>
        <div>
        <div className="sm:block -translate-x-6 hidden">
        <PostIdSecond {...post}/>
        </div>
        <div className="px-3 -translate-x-8">
        <PostIdList />
        </div>
        </div>
        </main>
</section>
    )
}
