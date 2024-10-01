import { notFound } from "next/navigation"
import PostIdList from "@/app/download/PostIdList"
import Navbar from "@/app/homepage/components/Navbar"
import PostId from "@/app/download/PostId"
import PostItem from "@/app/download/PostItem"
import getFetchDownload from "../../../../lib/download/FetchDownloadId"
export const revalidate = 0

type Props = {
    params: {
        id: string
    }
}

export default async function page({ params: { id } }: Props) {

    const post = await getFetchDownload(id)

    if (!post) notFound()

    return (
<section className="overflow-hidden"> 
    <div className="underis">
    <Navbar />
    </div>
        <main className="lg:inline-flex -translate-y-0 sm:translate-y-20">
        <div className="">
            <PostId  {...post}  />
            <PostItem   />
            
        </div>
            <PostIdList />
        </main>
</section>
    )
}