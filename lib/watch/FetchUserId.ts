export default async function getFetchWatchId(userId: string) {

  const res = await fetch(`shttps://next-server-qb2r.onrender.com/playlistsid?userId=${userId}`)

      if(!res.ok) throw new Error('no user found')

        return res.json()
}

