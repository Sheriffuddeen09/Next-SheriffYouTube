export default async function FetchLikeds(){
    const res = await fetch("https://next-server-qb2r.onrender.com/likeds") 
    const post:Posts[] = await res.json()

    return post
}
