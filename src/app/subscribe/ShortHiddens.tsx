'use client'
import Video from 'next-video';
import Link from 'next/link';
import { useState } from 'react';

export default function ShortHiddens(post:Posts){

    const [icon, setIcon ] = useState(false)

    const handleIcon = () =>{
        setIcon(!icon)
    }


return(
    <div className=''>
  <div className='mt-6'>
    <Link href={'/subscribehideid'}>
    <Video src={post.video} width={240} height={400} 
    className='rounded-xl hidden sm:block rounded-xl -translate-y-5'/>
    <Video src={post.video} width={240} height={450} 
    className='rounded-xl block sm:hidden -translate-y-5'/>
    </Link>
        <div className=' mt-1'>
        <p className='font-bold text-sm inline-flex gap-5'>
    <Link href={'/subscribehideid'}>
    {post.title} 
    </Link>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 cursor-pointers" onClick={handleIcon}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
</svg>
</p>
    <Link href={'/subscribehideid'}>
    <p className=' text-sm text-gray-400'>{post.views}</p>
    </Link>
    </div>
    <div>
    </div>
</div>
<div onClick={handleIcon} className={` flex flex-col  sm:w-40 rounded-xl p-4 relative top-0 sm:translate-x-0 translate-x-0 bg-filter -mb-44
        sm:left-16 left-32 z-10 ${icon ? "block" : "hidden"}`}>
<p className='inline-flex gap-4 my-1.5 text-sm items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
</svg>
Add to query</p>
<p className='inline-flex gap-4 my-1.5 text-sm items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />

Hide</svg>
</p>
<p className='inline-flex gap-4 my-1.5 text-sm items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
</svg>
Send feedback</p>
      </div>
</div>

)
}