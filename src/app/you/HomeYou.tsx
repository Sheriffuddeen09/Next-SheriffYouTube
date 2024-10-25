import FetchYous from "../../../lib/you/FetchYou"
import { Metadata } from "next"
import PostYou from "./PostYou"
import Link from "next/link";

export const metadata:Metadata = {
    title: 'Filter',
    description: 'video on sheriffYoutube'
   
}
export default async function HomeYou (){


    const posts = await FetchYous()
    const sortTodos = posts.reverse()

    const content = (
        <div className="p-3 gap-6 flex w-5/12 rounded-lg scrollba scroll-p-0 scroll-smooth scrollbar scrollbar-thumb-transparent hover:scrollbar-thumb-black  scrollbar-thin hover:scrollbar-track-white scrollbar-track-transparent scrollbar-thumb-opacity-10">
        {
            sortTodos.map(post =>(
                <PostYou key={post.id} {...post}/>
            ))
        }
        </div>
    )
    
    return (
        <section className="-translate-x-2 sm:translate-x-14 my-8 sm:my-14">
            <div className="inline-flex gap-5 mt-8 p-3">
                <p className="sm:text-6xl text-4xl text-white sm:w-28 w-20 sm:h-28 h-20 rounded-full bg-blue-800 flex items-center justify-center">O</p>
                <div>
                    <p className="sm:text-4xl text-xl font-bold">Odukoya Sheriff</p>
                    <p className="text-sm text-gray-400 mt-2 hidden sm:block ">@odukoyasheriff9735 . View channe    l</p>
                    <p className="text-sm text-gray-400 mt-2 block sm:hidden ">@odukoyasheriff9735 <br /> . View channel</p>
                    <div className='hidden sm:block'>
                        <div className="flex flex-row gap-3">
                        <p className="p-1 bg-filter rounded-xl inline-flex gap-1 text-sm items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>
Switch_account</p>



                        <p className="p-1 bg-filter rounded-xl inline-flex gap-1 text-sm items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
Google_account</p>

                        </div>
                    </div>
                    <div className="block sm:hidden">
                    <div className="gap-5 mt-2 flex flex-row w-64 p-2 -translate-x-24 mt-4 sm:w-96 rounded-lg scrollb scroll-p-4 scroll-smooth scrollbar scrollbar-thumb-blue-300  scrollbar-thin scrollbar-track-white">

                        <p className="p-1 bg-filter rounded-xl inline-flex gap-1 text-sm items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>
Switch_account</p>



                        <p className="p-1 bg-filter rounded-xl inline-flex gap-1 text-sm items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
Google_account</p>

<p className="p-1 bg-filter rounded-xl inline-flex gap-1 text-sm items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
Google_account</p>
<p className="p-1 bg-filter rounded-xl inline-flex gap-1 text-sm items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
Google_account</p>
<p className="p-1 bg-filter rounded-xl inline-flex gap-1 text-sm items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
Google_account</p>

                    </div>
                    </div>
                </div>
            </div>
            <div className="mt-14">
                <div className="flex flex-row gap-96">
                <p className="text-xl font-bold translate-x-4">History</p>
                <Link href={'/viewyou'}><p className="text-sm border rounded-2xl p-2 bg-black translate-x-96 transition-all duration-500 ease-in-out hover:bg-[#303030] ml-36">View all</p>
                </Link></div>
                {content}
            </div>
        </section>
    )
}