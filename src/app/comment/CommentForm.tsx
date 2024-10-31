'use client'
import { usePathname, useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useState, useTransition } from 'react';

const initState: Partial<Comments> = {
    content: '',
    userId: 1,

}
export default function CommentForm (){

    const pathname = usePathname()
    const router = useRouter()
    const [isPending, startTransition] = useTransition()
    const [isFetching, setIsFetching] = useState(false)
    const [data, setData] = useState(initState)

    const mutating = isPending || isFetching
    const handleSubmit = async (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        const {content, userId} = data
        setIsFetching(true)
        const res = await fetch (`http://localhost:3500/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId, content
            })
        })
        
        await res.json()

        setIsFetching(false)

        startTransition(() =>{
            if(pathname === "/comment"){
                router.push("/comment")
            }
            else{
                router.refresh()
            }
        })

        setData((prevData) =>({
            ...prevData,
            content: ''
        }))
    }
    const handleChange = async (e: ChangeEvent<HTMLInputElement>)=>{

       const name = e.target.name

        setData((prevData) =>({
            ...prevData,
            [name]: e.target.value
        }))
    }

    return (

        <form  onSubmit={handleSubmit} className={`mt-8 ${mutating ? "" :""}`} >
        <div className="inline-flex items-center gap-6">
        <label htmlFor="comment" className="ml-3 font-bold text-2xl">3 Comments</label>
        <p className="inline-flex items-center text-xl gap-2 font-bold"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
</svg>
 Sort by</p>
 </div>

        <input type="text" value={data.content}
        
        id="content"
        name="content"
        onChange={handleChange} placeholder="Add comments" className="sm:w-11/12 w-72 border-l-0 border-r-0 border-t-0 py-2 px-5 ml-3 my-6 rounded-xl border border-white bg-black"/>
      </form>
 

    )
}