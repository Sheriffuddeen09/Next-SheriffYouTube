import Link from "next/link"
import getFetchUser from "../../../lib/homepage/FetchUser"
import { Metadata } from "next"
import TodoIdList from "./TodoIdList"
import Image from "next/image"
import ImageOne from './images/transport.jpg'
import ImageThree from './images/onlinetech.jpg'
import ImageFive from './images/education.jpg'
import PostIddown from "./PostIddown"
import FetchLikes from "../../../lib/like/FetchLike"


export const metadata:Metadata = {
    title: 'Filter',
    description: 'video on sheriffYoutube'
   
}
export default async function PostIdList (){

    const userPosts: Promise<User[]> = getFetchUser()
    const users = await userPosts

    const posts = await FetchLikes()
    const sortTodos = posts.sort()

    const content = (
        <div className="p-3 flex flex-col hidden sm:block">
        {
            sortTodos.map(post =>(
                <TodoIdList key={post.id} {...post}/>
            ))
        }
        </div>
    )

    const button = (

        <main className="fixed py-2 flex flex-row z-10 w-72 mb-6 gap-3 ml-5 sm:ml-10 lg:w-96 md:w-8/12 rounded-lg mb-12 scrollba scroll-p-0 scroll-smooth scrollbar scrollbar-thumb-gray-900  scrollbar-thin scrollbar-track-black">
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
        <section className="sm:translate-x-0 -translate-x-3">
           <div className="-mt-10 sm:mt-28 translate-x-2">
                {button}
            </div>
            <div className="sm:mt-16 mt-8">
            {content}
              
            </div>
            
            <div className="sm:hidden block ml-6 w-72 p-2 flex flex-row  translate-y-20 gap-2 rounded-lg scrollb scroll-p-0 scroll-smooth scrollbar scrollbar-thumb-blue-300  scrollbar-thin scrollbar-track-white ">
                <Image src={ImageOne} alt="imaageOne" className="rounded-xl" width={200} style={{width:"250px"}} />
                <Image src={ImageThree} alt="imaageThree" className="w-72 rounded-xl" width={200} style={{width:"250px"}}/>
                <Image src={ImageFive} alt="imaageFive" className="rounded-xl" width={200} style={{width:"250px"}}/>
            </div>
            <div className="translate-y-14 ml-4 p-2 sm:hidden block">
            <PostIddown />
            </div>
        </section>
    )
}