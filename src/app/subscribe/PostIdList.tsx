import FetchSubscribe from "../../../lib/subscribe/FetchSubscribe"
import Link from "next/link"
import getFetchUser from "../../../lib/homepage/FetchUser"
import { Metadata } from "next"
import TodoIdList from "./TodoIdList"
import Image from "next/image"
import ImageOne from './images/backend.jpg'
import ImageThree from './images/cola.jpg'
import ImageFive from './images/education.jpg'
import PostIddown from "./PostIddown"


export const metadata:Metadata = {
    title: 'Filter',
    description: 'video on sheriffYoutube'
   
}
export default async function PostIdList (){

    const userPosts: Promise<User[]> = getFetchUser()
    const users = await userPosts

    const posts = await FetchSubscribe()
    const sortTodos = posts.reverse()

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

        <main className="fixed py-2 flex flex-row w-80 mb-6 gap-6 ml-5 sm:ml-10 lg:w-96 md:w-8/12 rounded-lg mb-12 scrollba scroll-p-0 scroll-smooth scrollbar scrollbar-thumb-gray-900  scrollbar-thin scrollbar-track-black">
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
        <section className="-translate-x-6 sm:translate-x-0">
           
            
            <div className="sm:mt-28">
                {button}
            </div>
            <div className="sm:mt-16 mt-8">
            {content}
              
            </div>
            <div className="sm:hidden block ml-3 p-2 flex translate-y-20 gap-2 rounded-lg scrollb scroll-p-0 scroll-smooth scrollbar scrollbar-thumb-blue-300  scrollbar-thin scrollbar-track-white ">
                <Image src={ImageOne} alt="imaageOne" className="w-72 rounded-xl" width={200} style={{width:"250px"}} />
                <Image src={ImageThree} alt="imaageThree" className="w-72rounded-xl" width={200} style={{width:"250px"}}/>
                <Image src={ImageFive} alt="imaageFive" className="w-72 rounded-xl" width={200} style={{width:"250px"}}/>
            </div>
            <div className="translate-y-14 ml-4">
            <PostIddown />
            </div>
        </section>
    )
}