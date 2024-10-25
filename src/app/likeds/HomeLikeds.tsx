import { Metadata } from "next"
import PostYou from "./PostYou"
import Link from "next/link";
import FetchLikeds from "../../../lib/likeds/FetchLikeds";

export const metadata:Metadata = {
    title: 'Filter',
    description: 'video on sheriffYoutube'
   
}
export default async function HomeLikeds(){


    const posts = await FetchLikeds()
    const sortTodos = posts.sort()

    const content = (
        <div className="p-3 gap-4 flex w-5/12 rounded-lg scrollba scroll-p-0 scroll-smooth scrollbar scrollbar-thumb-transparent hover:scrollbar-thumb-black  scrollbar-thin hover:scrollbar-track-white scrollbar-track-transparent scrollbar-thumb-opacity-10">
        {
            sortTodos.map(post =>(
                <PostYou key={post.id} {...post}/>
            ))
        }
        </div>
    )
    
    return (
        <section className="-translate-x-2 sm:translate-x-14 my-8 sm:my-14">
            <div className="mt-14">
                <div className="flex flex-row gap-96">
                <p className="text-xl font-bold inline-flex gap-2 translate-x-4">Liked Video <span className="font-light">{posts.length}</span></p>
                <Link href={'/viewlikeds'}><p className="transition-all duration-500 ease-in-out hover:bg-[#303030] text-sm border rounded-2xl p-2 bg-black translate-x-96 ml-24">View all</p>
                </Link></div>
                {content}
            </div>
        </section>
    )
}