import Video from "next-video"
import Image from "next/image"
export default function PostList(post:Posts){

    return(
        <div className="flex flex-col gap-4 p-2 text-white my-5">
            <div className="flex flex-row gap-3">
            <span>
            <Image src={`/${post.user}`} alt="imagepicture" className="w-10 h-10 rounded-full" height={30} width={30} />
            </span>
            <div>
                <p className="w-40 text-sm">{post.title}</p>
                <p className="text-sm">{post.date}</p>
            </div>
            <span>
            <Video src={post.video} width={100} height={50} className="rounded-xl"/>
            </span>
            </div>
        </div>
    )
}