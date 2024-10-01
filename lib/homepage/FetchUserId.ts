export default async function getFetchUserId(userId: string) {

  const res = await fetch(`https://next-server-qb2r.onrender.com/users/${userId}`)

      if(!res.ok) throw new Error('no user found')

        return res.json()
}

