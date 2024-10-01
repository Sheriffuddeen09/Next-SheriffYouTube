export default async function FetchNonDownload(){
    const res = await fetch("https://next-server-qb2r.onrender.com/nondownload") 
    const post:Posts[] = await res.json()

    return post
}