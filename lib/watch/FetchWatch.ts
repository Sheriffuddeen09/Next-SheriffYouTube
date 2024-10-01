export default async function FetchWatch(){
    const res = await fetch("https://next-server-qb2r.onrender.com/playlists") 
    const post:Shorts[] = await res.json()

    return post
}
