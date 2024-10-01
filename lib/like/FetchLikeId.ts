export default async function FetchLikeId(id:string){
    const res = await fetch(`https://next-server-qb2r.onrender.com/likes/${id}`)
    if(!res.ok) throw new Error('no user found')
        const post: Posts = await res.json()

    return post
}
