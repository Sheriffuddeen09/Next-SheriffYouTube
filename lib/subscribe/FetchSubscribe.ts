export default async function FetchSubscribe(){
    const res = await fetch("https://next-server-qb2r.onrender.com/subscribes")
    const post:Posts[] = await res.json()

    return post
}
