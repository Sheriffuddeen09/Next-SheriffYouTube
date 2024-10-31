'use client'
import Video from 'next-video';
import Link from 'next/link';


export default function PostViewYou(post:Shorts){

    return(
      <div>
      
        <div className='flex -mx-12 flex-col lg:flex-col md:flex-row md:gap-1 my-8 text-sm translate-x-8'>
        <Link href={`/editwatch/${post.id}`}>
             <span className='width hidden sm:block'>
             <Video src={post.video} width={250} className=' mb-2 w-44 md:w-32 h-40 rounded-xl p-1'
             />
             <div className='w-64 bg-relative relative bottom-40  transition-all duration-500 ease-in-out  -translate-y-2 -mb-40 h-40 rounded-xl'>
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
         <span className='w-72 block sm:hidden'>
             <Video src={post.video} width={285} className='bg-gray-400 mb-2 flex flex-col w-40 md:w-32 h-60 rounded-xl p-1'
             />
         </span>
        </Link>
         <div className=''>
        <div className='inline-flex gap-4 '>
          <Link href={`/editwatch/${post.id}`} className='inline-flex gap-2'>
         <p className='text-sm w-40'>
            {post.title}
        </p>
        </Link>

        </div>
        <Link href={`/editwatch/${post.id}`}>
        <p className='text-sm text-gray-400'>{post.views}</p>
        <p className='text-sm text-gray-400'>{post.date}</p>
        </Link>
        </div>
        
            </div>
        </div>
    )
}