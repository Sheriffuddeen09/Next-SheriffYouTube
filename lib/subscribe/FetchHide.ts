export default async function FetchHides(){
    const res = await fetch("https://next-server-qb2r.onrender.com/subscribehides")
    const post:Posts[] = await res.json()

    return post
}
