export default async function FetchMessage(){
    const res = await fetch("https://next-server-qb2r.onrender.com/messages") 
    const post:Posts[] = await res.json()

    return post
}