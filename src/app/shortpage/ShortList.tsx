import Fetchshort from "../../../lib/shortpage/fetchshort"
import { Metadata } from "next"
import ShortItem from "./ShortItem"

export const metadata:Metadata = {
    title: 'Shortvideo',
    description: 'video on sheriffYoutube'
   
}
export default async function ShortList (){

  
    const shorts = await Fetchshort()
    const sorts = shorts.reverse()

    const pagecontent = (
                <div className="p-3 flex flex-col items-center mx-auto -mb-8  gap-6 sm:mt-20 mt-5 ">
                <div className=" ">
                    {
                        sorts.map((sort)=>(
                <ShortItem {...sort}/>
                    ))}
                </div>
                </div>
                )
     
   
    return (
        <section className="">
           
            <div className="mt-14">
                {pagecontent}
              
            </div>
        </section>
    )
}