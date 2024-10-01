'use client'
import { Metadata } from "next"
import ShortHiddens from "./ShortHiddens"
import { useEffect, useState } from "react"

export const metadata:Metadata = {
    title: 'Filter',
    description: 'video on sheriffYoutube'
   
}
export default function ShortHide (){


    const [data, setData] = useState([]);
    
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
        <div className={`p-3 rounded-lg mb-12 
         grid gap-2 rounded-xl grid-cols-1 lg:grid-cols-5 md:grid-cols-3`}>
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