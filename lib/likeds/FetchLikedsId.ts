export default async function FetchLikedsId(id:string){
    const res = await fetch(`https://next-server-qb2r.onrender.com/likeds/${id}`)
    if(!res.ok) throw new Error('no user found')
        const post:Posts = await res.json()

    return post
}
