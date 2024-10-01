
export default async function getFetchDownload(id: string) {
    const res = await fetch(`https://next-server-qb2r.onrender.com/downloads/${id}`) 
    
    if (!res.ok) return undefined

    const post: Posts = await res.json()

    return post
}