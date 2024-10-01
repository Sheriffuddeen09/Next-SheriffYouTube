import { Metadata } from "next"
import Link from "next/link"
import FetchDownload from "../../../lib/download/FetchDownload"
import PostList from "./PostList"
import Navbar from "../homepage/components/Navbar"
import SideHomepage from "../homepage/home/SideHompage"
import NotPostList from "../notdownload/PostList"
import FetchNonDownload from "../../../lib/download/FetchNonDownload"

export const metadata:Metadata = {
    title: 'Filter',
    description: 'video on sheriffYoutube'
   
}
export default async function Subscribe (){


    const posts = await FetchDownload()
    const sortTodos = posts.sort()

    const notposts = await FetchNonDownload()
    const notsortTodos = notposts.sort()

    const content = (
        <div className="p-3 grid gap-2 grid-cols-1 lg:grid-cols-3 md:grid-cols-1">
        {
            sortTodos.map(post =>(
                <PostList key={post.id} {...post}/>
            ))
        }
        </div>
    )

    const notcontent = (
        <div className="p-3 grid gap-2 grid-cols-1 lg:grid-cols-3 md:grid-cols-1">
        {
            notsortTodos.map(post =>(
                <NotPostList key={post.id} {...post}/>
            ))
        }
        </div>
    )

    const Footer = (
        <section className="fixed top-10">
        <div className="bg-black items-center px-2  flex-row flex gap-8  mx-auto w-full">
           <Link href={'/'} className="text-white my-6 text-font  "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
</svg>
Home</Link>
           <Link href={'/shortpage'}><p className="text-white my-6 flex-col text-font items-center flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
<path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
</svg>
Shorts</p></Link>
           <p className="text-white my-6 flex-col text-font items-center flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 border ">
<path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
</svg>
Subscriptions</p>
<div className="text-white -translate-y-2 flex-col text-font items-center flex">
<p className="rounded-full w-10 p-2 font-bold bg-purple-400 text-center">O</p>
<p>You</p></div>
           </div>
   </section>

    )
    
    return (
        <section className="-translate-x-2 sm:translate-x-0 my-4 sm:my-4 overflow-hidden">
            <Navbar />
    <section className="min-h-screen text-base">
      <div className="flex p-3 flex-row gap-16 ">
        <div className="hidden sm:block">
        <SideHomepage />
        </div>
        <div className="translate-y-16">
            <h1 className="sm:text-2xl sm:font-bold ">Your download</h1>
            {content}
            <hr className="w-60 sm:w-full"/>
            <p className="my-5">Download available</p>
            {notcontent}

        </div>
      </div>
      <div className="sm:hidden block translate-x-2">
    {Footer}
    </div>
    </section>
    </section>
    )
}