import Fetchdata from "../../../lib/homepage/Fetchdata"
import { Metadata } from "next"
import SubscribeLists from "./SubscribeLists"

export const metadata:Metadata = {
    title: 'Filter',
    description: 'video on sheriffYoutube'
   
}
export default async function SubscribePage (){


    const posts = await Fetchdata()
    const sortTodos = posts.reverse()

    const content = (
        <div className="p-3 grid gap-2 grid-cols-1">
        {
            sortTodos.map(post =>(
                <SubscribeLists key={post.id} {...post}/>
            ))
        }
        </div>
    )

    
    return (
        <section className="translate-x-1 sm:translate-x-0 my-8 sm:my-14">
            <div className="-mt-10 sm:mt-14">
                {content}
            </div>
        </section>
    )
}