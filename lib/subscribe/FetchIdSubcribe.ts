
export default async function getFetchSubscribe(id: string) {
    const res = await fetch(`https://next-server-qb2r.onrender.com/subscribes/${id}`)

    if (!res.ok) return undefined

    const post: Posts = await res.json()

    return post
}