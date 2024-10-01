export default async function FetchDownload(){
    const res = await fetch("https://next-server-qb2r.onrender.com/downloads") 
    const post:Posts[] = await res.json()

    return post
}
