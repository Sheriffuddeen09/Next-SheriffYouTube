
'use client'
import { useState } from 'react';
import ShortHiddens from './ShortHiddens';

export default function Hidden(sortTodos: Posts[]){

    const [icon, setIcon ] = useState(false)

    const handleIcon = () =>{
        setIcon(!icon)
    }
    const [hide, setHide] = useState(false)
    const handleHide = () =>{
  
      setHide(!hide)
    }

    const content = (
        <div className="p-3 rounded-lg mb-12 scrollba scroll-p-0 scroll-smooth scrollbar lg:scrollbar-none scrollbar-thumb-gray-900  scrollbar-thin scrollbar-track-black
         grid gap-2 rounded-xl grid-cols-1 lg:grid-cols-5 md:grid-cols-3">
        {
            sortTodos.map(post =>(
                <ShortHiddens key={post.id} {...post}/>
            ))
        }
        </div>
    )


return(
    <div className=''>
      <div className={`mx-auto flex items-center ${hide ? "hidden" : "block"}`}>
        <div className="inline-flex gap-5 items-center mx-auto justify-center">
            <p className="lg:w-96 md:w-40 sm:block hidden  h-0.5 bg-gray-400"></p>
            <button onClick={handleHide} className="border rounded-xl py-2 px-8">See more post</button>
            <p className="lg:w-96 md:w-40 sm:block hidden  h-0.5 bg-gray-400"></p>
        </div>
      </div>
  <div className={`${hide ? "block" : "hidden"}`}>
  </div>
  </div>
)
}