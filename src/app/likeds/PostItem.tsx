import FetchMessage from "../../../lib/homepage/FetdhMessage"
import MessageList from "../homepage/home/MessageList"

export default async function PostItem (){


    const posts = await FetchMessage()
    const sortTodos = posts.reverse()

    const content = (
        <div className="">
        {
            sortTodos.map(post =>(
                <MessageList key={post.id} {...post}/>
            ))
        }
        </div>
    )

    return content
}