export default async function FetchLikes(){
    const res = await fetch("https://next-server-qb2r.onrender.com/likes")
    const post:Posts[] = await res.json()

    return post
}
