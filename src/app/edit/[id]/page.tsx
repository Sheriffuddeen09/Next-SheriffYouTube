import { notFound } from "next/navigation"
import getFetchPost from "../../../../lib/homepage/FetchdataId"
import PostIdList from "@/app/homepage/home/PostIdList"
import Navbar from "@/app/homepage/components/Navbar"
import PostId from "@/app/homepage/home/PostId"
import PostItem from "@/app/homepage/home/PostItem"
export const revalidate = 0

type Props = {
    params: {
        id: string
    }
}

export default async function page({ params: { id } }: Props) {

    const post = await getFetchPost(id)

    if (!post) notFound()

    return (
<section className="overflow-hidden"> 
    <div className="underis">
    <Navbar />
    </div>
        <main className="lg:inline-flex ">
        <div className="-translate-y-10 sm:translate-y-24">
            <PostId {...post}  />
            <PostItem   />
            
        </div>
            <PostIdList />
        </main>
</section>
    )
}