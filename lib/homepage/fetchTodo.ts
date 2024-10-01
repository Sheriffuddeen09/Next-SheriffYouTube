export default async function fetchTodo(id: string){
    const res = await fetch(`https://next-server-qb2r.onrender.com/posts/${id}`) 

    return res.json()
}