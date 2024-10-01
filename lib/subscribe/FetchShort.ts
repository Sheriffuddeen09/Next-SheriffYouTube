export default async function FetchSubscribeShort(){
    const res = await fetch("https://next-server-qb2r.onrender.com/subscribeshorts")
    const post:Posts[] = await res.json()

    return post
}
