export default async function Fetchdata(){
    const res = await fetch("https://next-server-qb2r.onrender.com/posts") 
    const post:Posts[] = await res.json()

    return post
}
