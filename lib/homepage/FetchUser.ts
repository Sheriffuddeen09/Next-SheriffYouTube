
export default async function getFetchUser() {

    const res = await fetch("https://next-server-qb2r.onrender.com/users")
    if(!res.ok) throw new Error('no user found')

    return res.json()
}
