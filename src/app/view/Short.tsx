import { Metadata } from "next"
import SubscribeList from "./SubscribeList"
import FetchSubscribeShort from "../../../lib/subscribe/FetchShort"
import ShortItems from "./ShortItems"

export const metadata:Metadata = {
    title: 'Filter',
    description: 'video on sheriffYoutube'
   
}
export default async function Short (){


    const posts = await FetchSubscribeShort()
    const sortTodos = posts.reverse()

    const content = (
        <div className="p-3 rounded-lg mb-12 scrollba scroll-p-0 scroll-smooth scrollbar lg:scrollbar-none scrollbar-thumb-gray-900  scrollbar-thin scrollbar-track-black
         grid gap-2 rounded-xl grid-cols-1 lg:grid-cols-5 md:grid-cols-3">
        {
            sortTodos.map(post =>(
                <ShortItems key={post.id} {...post}/>
            ))
        }
        </div>
    )

    
    return (
        <section className="-translate-x-2 sm:translate-x-0 my-8 sm:my-14">
            <div className="mt-14">
                {content}
            </div>
        </section>
    )
}