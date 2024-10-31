'use client'

import Video from "next-video"
import Image from "next/image"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { ChangeEvent, FormEvent, useState, useTransition } from "react"
import { RWebShare } from "react-web-share";
import React from "react";

const initState: Partial<Posts> = {
    title: '',
    userId: 1
}

export default function PostIdt (post:Shorts){

    const content = (
        <div>
            <RWebShare
                data={{
                    text: "Web Share - GfG",
                    url: "http://localhost:3000",
                    title: "GfG",
                }}
                onClick={() => console.log("shared successfully!")}
            >
                <button>Share</button>
            </RWebShare>
        </div>
    );
    const [share, setShare] = useState(false)

    const handleShare = () =>{

        setShare(!share)
    }

    const [icon, setIcon] = useState(false)
    const [like, setLike] = useState(0)
    const [height, setHeight] = useState(false)
    const [select, setSelect] = useState(false)
    const [subscribe, setSubscribe] = useState(false)

    const pathname = usePathname()
    const router = useRouter()
    const [isPending, startTransition] = useTransition()
    const [isFetching, setIsFetching] = useState(false)
    const [data, setData] = useState(initState)
    const mutating = isFetching || isPending
    const handleCount = () =>{
        setLike(prev => prev + 1)
        localStorage.setItem('count', JSON.stringify(like))
    }

    const handleHeight = () =>{

        setHeight(!height)
    }
    const handleIcon = () =>{

        setIcon(!icon)
    }
    const handleSelect = () =>{
        setSelect(!select)
    }
    const handleSubscribe = () =>{

        setSubscribe(!subscribe)
        localStorage.setItem('count', JSON.stringify(subscribe))
    }

    
  
    const handleSubmit = async (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        const {title, userId} = data
        setIsFetching(true)
        const res = await fetch (`http://localhost:3500/messages`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId, title
            })
        })
        
        await res.json()

        setIsFetching(false)

        startTransition(() =>{
            if(pathname === "/edit"){
                router.push("/edit")
            }
            else{
                router.refresh()
            }
        })

        setData((prevData) =>({
            ...prevData,
            title: ''
        }))
    }
    const handleChange = async (e: ChangeEvent<HTMLInputElement>)=>{

       const name = e.target.name

        setData((prevData) =>({
            ...prevData,
            [name]: e.target.value
        }))
    }

return(
    <div className={mutating ? "" : ""}>
    
      <div className='flex flex-col mt-20 px-3 sm:px-8 lg:flex-col translate-y-24  sm:my-1.5 text-sm'>
      <span className=''>
           <Video src={post.video} width={730} className='bg-gray-50 w-96 mb-2 h-96 rounded-xl hidden sm:block'
           />
       </span>
       <span className='w-64'>
           <Video src={post.video} width={250} className='bg-gray-50 w-52 mb-2 h-72 rounded-xl sm:hidden block'
           />
       </span>
       <div>
       <div className='inline-flex gap-2'>
       <p className='sm:text-xl text-sm font-bold'>
          {post.title}
      </p>
      </div>
      <div className="flex-col flex sm:flex-row mb-20 gap-14 items-center mt-4">
        <div className="inline-flex gap-3 items-center">
      <span className="sm:translate-x-0 -translate-x-10">
      <p className='text-sm text-gray-400'>{post.views}</p>
      <p className='text-sm text-gray-400 w-40'>{post.date}</p>
      </span>
      <button onClick={handleSubscribe} className="inline-flex -translate-x-14">
      <p className={`bg-white text-black py-2 px-4 font-bold rounded-3xl ${subscribe ? "hidden" : "block"}`}>Subscribe</p>
      <p className={`bg-filter inline-flex items-center gap-1 text-black py-2 sm:px-3 px-1 rounded-3xl ${subscribe ? "block" : "hidden"} `}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="sm:size-6 size-4 scaled">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
</svg>
Subscribed <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="sm:size-5 size-3" onClick={handleSelect}>
    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
</p>

      </button>
      </div>
      <div className="hidden sm:block">
      <div className="inline-flex gap-2 items-center sm:mt-0  ">
      <div className="flex gap-16 items-center justify-around bg-filter w-40 p-1 rounded-2xl" ><p className="text-center translate-x-10">{like}</p><p className="bg-gray-100 w-0.5 h-8"></p> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-16 -translate-x-10 cursor-pointer" onClick={handleCount}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54" />
</svg>
</div> 
<div onClick={handleShare} className="flex gap-4 items-center text-white justify-center font-bold bg-filter w-28 p-1 rounded-2xl">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
</svg>
{content}
</div>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" onClick={handleIcon} className="size-8 bg-filter cursor-pointer rounded-full">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>

</div>
</div>
      </div>
      </div>
      <div className="sm:hidden block ">
      <div className="inline-flex gap-2 items-center -translate-y-16 mt-5 w-60 scrollba scroll-p-0 scroll-smooth scrollbar scrollbar-thumb-gray-900  scrollbar-thin scrollbar-track-black">
      <div className="flex gap-16 items-center justify-around bg-filter w-40 p-1 rounded-2xl" ><p className="text-center translate-x-10">{like}</p><p className="bg-gray-100 w-0.5 h-8"></p> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-16 -translate-x-10 cursor-pointer" onClick={handleCount}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54" />
</svg>
</div> 
<div onClick={handleShare} className="flex gap-4 items-center text-white justify-center font-bold bg-filter w-28 p-2 rounded-2xl">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
</svg>
{content}
</div>
<p className='inline-flex bg-filter p-2 rounded-xl gap-4 my-1.5 text-sm items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
</svg>
Download</p>
<p className='inline-flex bg-filter p-2 rounded-xl gap-4 my-1.5 text-sm items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m7.848 8.25 1.536.887M7.848 8.25a3 3 0 1 1-5.196-3 3 3 0 0 1 5.196 3Zm1.536.887a2.165 2.165 0 0 1 1.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 1 1-5.196 3 3 3 0 0 1 5.196-3Zm1.536-.887a2.165 2.165 0 0 0 1.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863 2.077-1.199m0-3.328a4.323 4.323 0 0 1 2.068-1.379l5.325-1.628a4.5 4.5 0 0 1 2.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.33 4.33 0 0 0 10.607 12m3.736 0 7.794 4.5-.802.215a4.5 4.5 0 0 1-2.48-.043l-5.326-1.629a4.324 4.324 0 0 1-2.068-1.379M14.343 12l-2.882 1.664" />
</svg>

Clip</p>
          <p className='inline-flex bg-filter p-2 rounded-xl gap-4 my-1.5 text-sm items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
</svg>
Save</p>
          <p className='inline-flex bg-filter p-2 rounded-xl gap-4 my-1.5 text-sm items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
</svg>
Report</p>  
</div>
</div>
      
          </div>
      
          <section className={`bg-filter flex flex-col p-3 text-sm font-bold mt-16 ml-3 rounded-2xl w-64 sm:w-11/12`}>
            <div className="flex flex-col">{post.views} views {post.date} <span className="text-blue-400">NIGERIA</span> 
                <br />
                <Link href={'/short'} className="text-blue-400">#shortsvideo</Link>
                <br />
                {post.title}
                <br />
                <Link href={'/short'} className="text-blue-400">#subscribevideo</Link>
                <div className={`-mt-5 ${height ? "block" : "hidden"}`}>
                <br />
                <Link href={'/short'} className="text-blue-400">#downloadvideo</Link>
                <p className="mt-16 text-2xl font-bold text-white">Transcript</p>
                <p className="mt-5 text-white font-light">Follow along using the transcript</p>
                <button className="mt-5 bg-show border p-2 rounded-2xl border-white text-blue-400">Show transcript</button>
                <br />
                <div className="inline-flex mt-4 items-center gap-2"> 
                <Image alt='user' src={`/${post.user}`} className='rounded-full' width={30} height={30}/>
                <span>
                <p className='text-sm text-white text-2xl'>{post.date}</p>
                <p className='text-sm text-gray-400' style={{fontSize:"12px"}}>{post.views} subscribers</p>
                </span>
                </div>
                <div className="flex flex-col">
                <div className="inline-flex gap-3 items-center mt-4 mb-16">
                <div className="flex gap-4 border items-center text-white justify-center font-bold bg-filter w-24 p-2 rounded-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 border ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
</svg>

Video
</div>
<div className="flex gap-4 items-center border text-white justify-center font-bold bg-filter w-24 p-2 rounded-2xl">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 border">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>

About
</div>
</div>
                </div>  
                </div>
            </div>
            <p onClick={handleHeight} className="cursor-pointer">{height ? "Show less" : "...more"}</p>
          </section>
          <div onClick={handleIcon} className={` flex flex-col w-32 translate-x-20 sm:w-40 rounded-xl p-4 relative sm:bottom-52 bottom-48 sm:translate-x-80 translate-x-0 bg-filter -mb-44
        sm:left-96 left-32 z-10 ${icon ? "block" : "hidden"}`}>
        <p className='inline-flex gap-4 my-1.5 text-sm items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
</svg>
Download</p>
<p className='inline-flex gap-4 my-1.5 text-sm items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m7.848 8.25 1.536.887M7.848 8.25a3 3 0 1 1-5.196-3 3 3 0 0 1 5.196 3Zm1.536.887a2.165 2.165 0 0 1 1.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 1 1-5.196 3 3 3 0 0 1 5.196-3Zm1.536-.887a2.165 2.165 0 0 0 1.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863 2.077-1.199m0-3.328a4.323 4.323 0 0 1 2.068-1.379l5.325-1.628a4.5 4.5 0 0 1 2.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.33 4.33 0 0 0 10.607 12m3.736 0 7.794 4.5-.802.215a4.5 4.5 0 0 1-2.48-.043l-5.326-1.629a4.324 4.324 0 0 1-2.068-1.379M14.343 12l-2.882 1.664" />
</svg>

Clip</p>
          <p className='inline-flex gap-4 my-1.5 text-sm items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
</svg>
Save</p>
          <p className='inline-flex gap-4 my-1.5 text-sm items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
</svg>
Report</p>
      </div>
      <form  onSubmit={handleSubmit} className="mt-8">
        <div className="inline-flex items-center gap-3">
        <label htmlFor="comment" className="ml-3 font-bold text-2xl">3 Comments</label>
        <p className="inline-flex items-center text-xl gap-2 font-bold"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
</svg>
 Sort by</p>
 </div>

        <input type="text" value={data.title}
        
        id="title"
        name="title"
        onChange={handleChange} placeholder="Add comments" className="sm:w-11/12 w-60 border-l-0 border-r-0 border-t-0 py-2 px-5 ml-3 my-6 rounded-xl border border-white bg-black"/>
      </form>
    <div>
    </div>

      </div>
  )
}