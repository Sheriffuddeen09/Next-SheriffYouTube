'use client'
import { Metadata } from "next"
import ShortHiddens from "./ShortHiddens"
import { useEffect, useState } from "react"

export const metadata:Metadata = {
    title: 'Filter',
    description: 'video on sheriffYoutube'
   
}
export default function ShortHide (){


    const [data, setData] = useState([]); // based on your data you should store it here in state
    const [hide, setHide] = useState(false)
    const handleHide = () =>{
  
      setHide(!hide)
    }
    
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3500/subscribehides");
        const result = await response.json() 
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
    const content = (
        <div>
        <div className={`mx-auto flex items-center ${hide ? "hidden" : "block"}`}>
        <div className="inline-flex gap-5 items-center mx-auto justify-center">
            <p className="lg:w-96 md:w-40 sm:block hidden  h-0.5 bg-gray-400"></p>
            <button onClick={handleHide} className="border rounded-xl py-2 px-8">See more post</button>
            <p className="lg:w-96 md:w-40 sm:block hidden  h-0.5 bg-gray-400"></p>
        </div>
      </div>
        <div className={`p-3 rounded-lg mb-12 
         grid gap-2 rounded-xl grid-cols-1 lg:grid-cols-5 md:grid-cols-3 ${hide ? "block" : "hidden"}`}>
        {
            data.map((post: Posts) =>(
                <ShortHiddens key={post.id} {...post}/>
            ))
        }
        </div>
    </div>
    )

    
    return (
        <section className="-translate-x-2 sm:translate-x-0 my-8 sm:my-14">
            <div className="mt-14">
                {content}
            </div>
        </section>
    )
}