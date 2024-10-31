import { Metadata } from "next"
import CommentList from "./CommentList"
import FetchComment from "../../../lib/shortpage/fetchcomment"
import CommentForm from "./CommentForm"
import SideHomepage from "../homepage/home/SideHompage"
import Navbar from "../homepage/components/Navbar"

export const metadata:Metadata = {
    title: 'Comment',
    description: 'Comment on sheriffYoutube'
   
}
export default async function HomePage (){


    const posts = await FetchComment()
    const sortTodos = posts.reverse()

    const content = (
        <div className="p-3 flex flex-col justify-center mx-auto">
        {
            sortTodos.map(post =>(
                <CommentList key={post.id} {...post}/>
            ))
        }
        </div>
    )

    return (
        <section>
        <Navbar />
        <section className="min-h-screen text-base">
          <div className="flex p-3 flex-row sm:gap-96 ">
            <div className="hidden sm:block">
            <SideHomepage />
            </div>
            <div>
            
        <div className="flex flex-col items-center justify-center mt-20 py-24 flex h-96 rounded-lg scrollb scroll-p-0 scroll-smooth scrollbar scrollbar-thumb-gray-800  scrollbar-thin scrollbar-track-white">
            {content}
            </div>
            <div>
            <CommentForm />
            </div>
        </div>
        </div>
        </section>
        </section>
    )
}