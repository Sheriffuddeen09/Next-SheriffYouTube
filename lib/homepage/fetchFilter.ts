export default async function fetchFilter(userId:string){
    const res = await fetch(`https://next-server-qb2r.onrender.com/posts?userId=${userId}`)

    return res.json()
}