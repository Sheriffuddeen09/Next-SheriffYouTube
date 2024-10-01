export default async function getWikipedia(searchTerm:string){

    const searchParams = new URLSearchParams({
        action: 'query',
        generator: 'search',
        gsrsearch: searchTerm,
        gsrlimit: '20',
        prop: 'pageimages|extracts',
        exchars: '100',
        exintro: 'true',
        explaintext: 'true',
        exlimit: 'max',
        format: 'json',
        origin: '*'



    })

    const response = await fetch('http://localhost:4000/posts'+ searchParams)
    return response.json()
}