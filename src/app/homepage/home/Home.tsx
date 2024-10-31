import PostList from "./PostList"
import Fetchdata from "../../../../lib/homepage/Fetchdata"
import Link from "next/link"
import getFetchUser from "../../../../lib/homepage/FetchUser"
import { Metadata } from "next"

export const metadata:Metadata = {
    title: 'Filter',
    description: 'video on sheriffYoutube'
   
}
export default async function HomePage (){

    const userPosts: Promise<User[]> = getFetchUser()
    const users = await userPosts

    const posts = await Fetchdata()
    const sortTodos = posts.reverse()

    const content = (
        <div className="p-3 grid gap-2 grid-cols-1 lg:grid-cols-3 md:grid-cols-1">
        {
            sortTodos.map(post =>(
                <PostList key={post.id} {...post}/>
            ))
        }
        </div>
    )

    const button = (

        <main className="py-2 flex flex-row w-72 mb-6 gap-6 ml-10 lg:w-11/12 md:w-8/12 rounded-lg mb-12 scrollba scroll-p-0 scroll-smooth scrollbar scrollbar-thumb-transparent  scrollbar-thin scrollbar-track-transparent">
                <Link href={'/'}><button className="bg-filter p-1 h-8 rounded-xl">All</button></Link>
    {
    users.map(user =>{
        return (
                <div key={user.id}>
                <Link href={`/users/${user.id}`}><button className="bg-filter p-1 h-8 rounded-xl">{user.name}</button></Link>
                </div>
            )
        })
    }
   </main>
    )
    
    return (
        <section className="-translate-x-2 sm:translate-x-0 my-8 sm:my-14">
            <div className="fixed z-10 hidden sm:block -translate-x-10 sm:-translate-x-6 my-2 sm:my-5 mb-4 h-10">
               {button}
            </div>
            <div className="fixed z-10 sm:hidden block relative bottom-3  -translate-x-5 sm:translate-x-0 my-2 sm:my-5 mb-4 h-10">
               {button}
            </div>
            <div className="-mt-4 sm:mt-20 sm:translate-x-10">
                {content}
            </div>
        </section>
    )
}