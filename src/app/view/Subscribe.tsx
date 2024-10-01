import FetchSubscribe from "../../../lib/subscribe/FetchSubscribe"
import { Metadata } from "next"
import SubscribeList from "./SubscribeList"
import Short from "./Short"
import Link from "next/link"

export const metadata:Metadata = {
    title: 'Filter',
    description: 'video on sheriffYoutube'
   
}
export default async function Subscribe (){


    const posts = await FetchSubscribe()
    const sortTodos = posts.reverse()

    const content = (
        <div className="p-3 grid gap-2 grid-cols-1 lg:grid-cols-3 md:grid-cols-1">
        {
            sortTodos.map(post =>(
                <SubscribeList key={post.id} {...post}/>
            ))
        }
        </div>
    )

    
    return (
        <section className="-translate-x-2 sm:translate-x-0 my-4 sm:my-4">
            
            <div className="mt-14">
            <div className="flex flex-row justify-between items-center mt-10 translate-y-5 p-3 mx-3">
        <p className="text-white font-bold text-xl">Latest</p>

        <div className="inline-flex gap-4 items-center -translate-x-20">
            <Link href={''} className="text-blue-400">manage</Link>
        <Link href={'/subscribe'}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
</svg>
</Link>
<Link href={'/subscribelist'}>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>
</Link>
</div>
        </div>
                {content}
                <div className="flex flex-row justify-between items-center mx-3">
                <p className="inline-flex items-center gap-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-red-500 size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
</svg>
Short</p>
</div>
                <Short />
            </div>
        </section>
    )
}