export default async function FetchNotification(){
    const res = await fetch("https://next-server-qb2r.onrender.com/notify")
    const post:Posts[] = await res.json()

    return post
}