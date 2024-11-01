'use client'
import Video from 'next-video';
import Link from 'next/link';

export default function PostYou(post:Shorts){

    return(
      <div>
      
        <div className='flex flex-col lg:flex-col md:flex-row md:gap-4 my-1.5 text-sm sm:translate-x-3'>
        <Link href={`/editwatch/${post.userId}`}>
             <div className='width hidden sm:block translate-x-3'>
             <Video src={post.video} width={230} className=' mb-2 w-40 md:w-32 h-40 rounded-xl p-1'
             />
             <p className='bg-color -mb-20 px-2 py-1 translate-x-3 relative bottom-12 left-32 rounded-sm inline-flex items-center gap-1'>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-white size-3 border ">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
            </svg>
                {post.amount}video
             </p>
               <div className='w-60 bg-relatives relative bottom-48 -translate-y-2 -mb-40 h-40 rounded-xl transition-all duration-500 ease-in-out'>
              <div className='flex flex-row relative top-20 left-20 p-1 gap-1'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                </svg>
                PLAY ALL
              </div>
            </div>
            </div>
      
            <span className='block sm:hidden' style={{width:'300px'}}>
             <Video src={post.video} width={290} className='bg-gray-400 mb-2 flex flex-col w-40 md:w-32 h-60 rounded-xl p-1'
             />
         </span>
        </Link>
         <div className='-translate-y-0'>
        <div className='inline-flex gap-4 '>
          <Link href={`/editwatch/${post.userId}`} className='inline-flex gap-2'>
         <p className='text-sm w-40'>
            {post.title}
        </p>
        </Link>
        </div>
        <Link href={`/editwatch/${post.userId}`}>
        <p className='text-sm text-gray-400'>{post.views}</p>
        <p className='text-sm text-gray-400'>{post.date}</p>
        </Link>
        </div>
        
            </div>
        </div>
    )
}