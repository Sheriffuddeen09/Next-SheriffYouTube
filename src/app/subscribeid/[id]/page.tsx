import { notFound } from "next/navigation"
import getFetchSubscribe from "../../../../lib/subscribe/FetchIdSubcribe"
import PostIdList from "@/app/subscribe/PostIdList"
import Navbar from "@/app/homepage/components/Navbar"
import PostId from "@/app/subscribe/PostId"
import PostItem from "@/app/subscribe/PostItem"
export const revalidate = 0

type Props = {
    params: {
        id: string
    }
}

export default async function page({ params: { id } }: Props) {

    const post = await getFetchSubscribe(id)

    if (!post) notFound()

    return (
<section className="overflow-hidden"> 
    <div className="z-10 isolate">
    <Navbar />
    </div>
        <main className="lg:inline-flex">
        <div className="-translate-y-10 sm:translate-y-24">
            <PostId  {...post}  />
            <PostItem   />
            
        </div>
            <PostIdList />
        </main>
</section>
    )
}