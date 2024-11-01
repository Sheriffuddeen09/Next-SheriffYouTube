'use client'
import Video from 'next-video';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function SubscribeList(post:Posts){

    const [icon, setIcon] = useState(false)

    const handleIcon = () =>{

        setIcon(!icon)
    }
    return(
      <div>
      
        <div className='flex flex-col lg:flex-col md:flex-row md:gap-4 my-1.5 text-sm sm:translate-x-0 -translate-x-2'>
        <Link href={`/edit/${post.id}`}>
             <span className='width hidden sm:block'>
             <Video src={post.video} width={350} className='bg-gray-400 mb-2 w-40 md:w-32 h-60 rounded-xl p-1'
             />
             <div className=' bg-relate relative bottom-60  transition-all duration-500 ease-in-out  -translate-y-2 -mb-60 h-60 rounded-xl'>
              <div className='flex flex-col gap-1 fixed top-3 right-2'>
              <div className='inline-flex gap-1 py-1 pl-2 rounded-sm translate-x-4'>
              <p className='bg-filter-hover p-1 relative left-8 w-28 gap-1 text-start inline-flex items-center'>Water Later   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 rounded-full  z-10">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg></p>
              <p className='bg-filter rounded-sm p-1'>
                <span className='hidden'>s</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 rounded-full  z-10">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            </p>
            </div>
            <div className='inline-flex gap-1 py-1 pl-2 rounded-sm'>
              <p className='bg-filter-hover p-1 relative left-8 w-32 gap-1 text-start inline-flex items-center'>
              Add to queue  
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25" />
          </svg>
          </p>
              <p className='bg-filter rounded-sm p-1'>
                <span className='hidden'>s</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25" />
          </svg>
            </p>
            </div>
              </div>
            </div>

         </span>
         <span className='block sm:hidden' style={{width:'300px'}}>
             <Video src={post.video} width={290} className='bg-gray-400 mb-2 flex flex-col w-40 md:w-32 h-60 rounded-xl p-1'
             />
         </span>
        </Link>
         <div className=''>
        <div className='inline-flex gap-20 '>
          <Link href={`/edit/${post.id}`} className='inline-flex gap-2'>
         <Image alt='user' src={`/${post.user}`} className='rounded-full' width={30} height={30}/>
         <p className='text-sm'>
            { 
                (post.title).length <= 10 ?
                post.title : `${(post.title).slice(0,38)}...`
                
            }
        </p>
        </Link>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 cursor-pointer" onClick={handleIcon}>
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
        </svg>

        </div>
        <Link href={`/edit/${post.id}`}>
        <p className='text-sm text-gray-400'>{post.tag}</p>
        <p className='text-sm text-gray-400'>{post.views} * {post.date}</p>
        </Link>
        </div>
        
            </div>
            <div onClick={handleIcon} className={` flex flex-col  sm:w-64 rounded-xl p-4 relative -mb-96 -top-80 bg-filter -translate-y-10 left-32 z-10 ${icon ? "block" : "hidden"}`}>
            <p className='inline-flex gap-4 my-1.5 text-sm items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="border size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
</svg>
Add to queue</p>
            <p className='inline-flex gap-4 my-1.5 text-sm items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
Save to Watch Later</p>
            <p className='inline-flex gap-4 my-1.5 text-sm items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
</svg>
Save to playlist</p>
            <p className='inline-flex gap-4 my-1.5 text-sm items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
</svg>
Download</p>
            <p className='inline-flex gap-4 my-1.5 text-sm items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
</svg>
Share</p>
<hr className='my-3'/>
            <p className='inline-flex gap-4 my-1.5 text-sm items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
</svg>
Not interested</p>
            <p className='inline-flex gap-4 my-1.5 text-sm items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
Don&apos;t recommend channel</p>
            <p className='inline-flex gap-4 my-1.5 text-sm items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
</svg>
Report</p>
        </div>
        </div>
    )
}