export default async function FetchYous(){
    const res = await fetch("https://next-server-qb2r.onrender.com/you")
    const post:Posts[] = await res.json()

    return post
}
