export default async function FetchYousId(id:string){
    const res = await fetch(`https://next-server-qb2r.onrender.com/you/${id}`)
    if(!res.ok) throw new Error('no user found')
        const post: Posts = await res.json()

    return post
}
