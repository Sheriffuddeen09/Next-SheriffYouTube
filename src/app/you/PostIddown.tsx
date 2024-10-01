import PostYou from "./PostYou"
import FetchYous from "../../../lib/you/FetchYou"
import { Metadata } from "next"

export const metadata:Metadata = {
    title: 'full view',
    description: 'video on sheriffYoutube'
   
}
export default async function PostIddown (){

    const posts = await FetchYous()
    const sortTodos = posts.reverse()

    const content = (
        <div className="p-3 grid gap-2 grid-cols-1 lg:grid-cols-3 md:grid-cols-1">
        {
            sortTodos.map(post =>(
                <PostYou key={post.id} {...post}/>
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