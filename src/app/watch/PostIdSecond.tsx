'use client'

import Video from "next-video"
import Link from "next/link"
import React, { useState } from "react";


export default function PostIdSecond (post:Shorts){
    const [toggle, setToggle] = useState(false)

    const handleToggle = () =>{
        setToggle(!toggle)
    }
return(
    <div className={`noneheight ${toggle ? "height" : "noneHeight"} translate-y-24 flex-col flex translate-x-10 mb-20 border rounded-lg h-96 rounded-lg scrolbar scroll-p-0 scroll-smooth scrollbar scrollbar-thumb-blue-300  scrollbar-thin scrollbar-track-white`} style={{width:"400px"}}>
    <div className="rounded-lg justify-between p-2 flex flex-col bg-gray-800 mb-3">
      <div className="flex justify-between items-center ">
       <div>
        <p>{post.title}</p>
        <p className="font-bold"  style={{fontSize:"12px"}}>{post.views} * {post.amount}</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`size-6 cursor-pointer ${toggle ? "hidden" : "block"}`} onClick={handleToggle}>
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`size-6 cursor-pointer ${toggle ? "block" : "hidden"}`} onClick={handleToggle}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

    </div>
    <div>
        <div className="flex justify-between mt-3 pb-3">
            <div className="inline-flex gap-4 items-center ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>

            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
</svg>

            </div>
        </div>
    </div>
    <Link href={`/editwatch/${post.id}`}>
    <div className={`inline-flex gap-6 px-3 ${toggle ? "block" : "hidden"}`} >
    <span className=''>
             <Video src={post.video} width={200} className=' mb-2 h-32 border border-r-0 border-l-0  border-white enone bg-white rounded-xl p-1 mb-5' style={{width:"210px"}}
             />
         </span>
    
       <div>
       <p className='sm:text-sm text-sm w-32'>
          {post.title}
      </p>
      <div className="flex-col flex sm:flex-row mb-20 gap-14 items-center mt-4">
      <span>
      <p className='text-sm text-gray-400'>{post.views}</p>
      <p className='text-sm text-gray-400 w-32'>{post.date}</p>
      </span>
     </div>    
     
     </div>
     </div>
     </Link>
     <Link href={`/editwatchs/${post.id}`}>
     <div className={`inline-flex gap-6 px-3 -translate-y-12  ${toggle ? "block" : "hidden"}`} >
    <span className=''>
             <Video src={post.second} width={200} className=' mb-2 h-32 border border-r-0 border-l-0  border-white enone bg-white rounded-xl p-1 mb-5' style={{width:"210px"}}
             />
         </span>
       <div>
       <p className='sm:text-sm text-sm w-32'>
          {post.text}
      </p>
      <div className="flex-col flex sm:flex-row mb-20 gap-14 items-center mt-4">
      <span>
      <p className='text-sm text-gray-400'>{post.views}</p>
      <p className='text-sm text-gray-400 w-32'>{post.date}</p>
      </span>
     </div>    
     </div>
    </div> 
    </Link>
    <Link href={`/editwatcht/${post.id}`}>
    <div className={`inline-flex gap-6 px-3 -translate-y-24  ${toggle ? "block" : "hidden"}`} >
    <span className=''>
             <Video src={post.videos} width={200} className=' mb-2 h-32 border border-r-0 border-l-0  border-white enone bg-white rounded-xl p-1 mb-5' style={{width:"210px"}}
             />
         </span>
       <div>
       <p className='sm:text-sm text-sm w-32'>
          {post.texts}
      </p>
      <div className="flex-col flex sm:flex-row mb-20 gap-14 items-center mt-4">
      <span>
      <p className='text-sm text-gray-400'>{post.views}</p>
      <p className='text-sm text-gray-400 w-32'>{post.date}</p>
      </span>
     </div>    
     </div>
 </div>
 </Link>
 </div>
  )
}