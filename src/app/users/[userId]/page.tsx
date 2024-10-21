import { Suspense } from 'react'
import ListItem from '@/app/homepage/components/ListItem'
import getFetchUser from '../../../../lib/homepage/FetchUser'
import fetchFilter from '../../../../lib/homepage/fetchFilter'
import Link from 'next/link'
import Navbar from '@/app/homepage/components/Navbar'
import SideHomepage from '@/app/homepage/home/SideHompage'
import Footer from '@/app/homepage/components/Footer'

type Params = {
  params:{
    userId: string
  }
}
export default async function UserId({ params:{ userId } }: Params) {
 
    const postPosts: Promise<Posts[]> = fetchFilter(userId)
    const userPosts: Promise<User[]> = getFetchUser()
    const users = await userPosts


    const button = (

      <main className=" pt-2 flex flex-row w-60 -translate-x-8 sm:translate-x-0 mb-6 gap-6 ml-10 mb-20  lg:w-11/12 md:w-8/12 rounded-lg scrollba scroll-p-0 scroll-smooth scrollbar scrollbar-thumb-gray-900  scrollbar-thin scrollbar-track-black">
              <Link href={'/'}><button className="bg-filter p-1 h-8 rounded-xl">All</button></Link>
  {
  users.map(user =>{
      return (
              <div key={user.id}>
              <Link key={user.id} href={`/users/${user.id}`} ><button className="bg-filter p-1 h-8 rounded-xl">{user.name}</button></Link>
              </div>
          )
      })
  }
 </main>
  )

   
    return (
      <section>
      <Navbar />
      <section className="min-h-screen text-base">
        <div className="flex p-3 flex-row gap-12">
          <div className="hidden sm:block">
          <SideHomepage />
          </div>
        <div>
          <div className="mt-12 isolate fixed z-10  bg-button translate-x-6 pt-2 translate-y-5 mb-8">{button}</div>
          <div className=' translate-y-7'>
          <Suspense fallback={ <p>loading....</p> }>
          
          <ListItem postPost={postPosts}/>
    </Suspense>
          </div>
        </div>
        </div>
        <div className="sm:hidden block">
      <Footer />
      </div>
      </section>
      </section>
    )
   
}

