export default async function FetchSubscribeShortid(id: string){
    const res = await fetch(`https://next-server-qb2r.onrender.com/subscribeshorts/${id}`)
    if (!res.ok) return undefined

    const post: Shorts = await res.json()

    return post
}
