export default async function Fetchshort(){
    const res = await fetch("https://next-server-qb2r.onrender.com/shorts")
    const short:Shorts[] = await res.json()

    return short
}
