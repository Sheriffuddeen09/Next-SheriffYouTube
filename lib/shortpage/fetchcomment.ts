export default async function FetchComment(){
    const res = await fetch("https://next-server-qb2r.onrender.com/comments")
    const comment:Comments[] = await res.json()

    return comment
}
