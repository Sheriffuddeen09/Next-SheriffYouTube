export default async function FetchWatchId(id:string){
    const res = await fetch(`https://next-server-qb2r.onrender.com/playlists/${id}`)
    if(!res.ok) throw new Error('no user found')
        const post: Shorts = await res.json()

    return post
}
