
export default async function getFetchPost(id: string) {
    const res = await fetch(`https://next-server-qb2r.onrender.com/posts/${id}`) 
    if (!res.ok) return undefined

    const post: Posts = await res.json()

    return post
}