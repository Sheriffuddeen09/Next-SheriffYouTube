import Subscribe from "./Subscribe"
import FetchSubscribe from "../../../lib/subscribe/FetchSubscribe"
import { Metadata } from "next"

export const metadata:Metadata = {
    title: 'full view',
    description: 'video on sheriffYoutube'
   
}
export default async function PostIddown (){

    const posts = await FetchSubscribe()
    const sortTodos = posts.reverse()

    const content = (
        <div className="p-3 grid gap-2 grid-cols-1 lg:grid-cols-3 md:grid-cols-1">
        {
            sortTodos.map(post =>(
                <Subscribe key={post.id} {...post}/>
            ))
        }
        </div>
    )

    return (
        <section className="translate-x-1 sm:translate-x-0 my-8 sm:my-14">
            <div className="sm:mt-14">
                {content}
            </div>
        </section>
    )
}