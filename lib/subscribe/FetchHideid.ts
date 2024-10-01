export default async function FetchHideid(id: string){
    const res = await fetch(`https://next-server-qb2r.onrender.com/subscribehides/${id}`)
    if (!res.ok) return undefined

    const post: Shorts = await res.json()

    return post
}
