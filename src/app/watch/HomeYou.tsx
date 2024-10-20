import FetchWatch from "../../../lib/watch/FetchWatch";
import { Metadata } from "next"
import PostYou from "./PostYou"
import Link from "next/link";

export const metadata:Metadata = {
    title: 'Filter',
    description: 'video on sheriffYoutube'
   
}
export default async function HomeWatch (){


    const posts = await FetchWatch()
    const sortTodos = posts.reverse()

    const content = (
        <div className="p-3 gap-2 flex w-5/12 rounded-lg scrollba scroll-p-0 scroll-smooth scrollbar scrollbar-thumb-transparent hover:scrollbar-thumb-black  scrollbar-thin hover:scrollbar-track-white scrollbar-track-transparent scrollbar-thumb-opacity-10">
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
                <div className="inline-flex gap-3 items-center">
                <p className="text-xl font-bold">Playlist</p>
                <select name="select" id="select" className="text-gray-400 font-bold text-sm border border-transparent focus:bg-transparent bg-transparent outline-transparent p-2">
                    <option value="A-Z" className="my-6 bg-filter p-2 "> A-Z</option>
                    <option value="Recently View" className="my-6 bg-filter p-2">Recently added</option>
                </select>
                </div>
                <Link href={'/viewwatch'}><p className="transition-all duration-500 ease-in-out hover:bg-[#303030] text-sm border rounded-2xl p-2 bg-black translate-x-72 ml-24">View all</p>
                </Link></div>
                {content}
            </div>
        </section>
    )
}