
type Posts = {
    length: ReactNode
    id:number
    userId: number,
    video:string,
    name:string,
    title:string,
    tag:string,
    views:string,
    date:string,
    user:string,
    image:string
}

type Shorts = {
    second:string
    text:string
    tex:string
    texts:string
    vide:string
    videos:string
    userId: string
    id: string,
    user:string,
    video:string,
    title:string,
    body:string,
    name:string
    subscribe:string
    subscribed:string,
    views:string
    date:string
    amount:string
}

type Comments = {
    userId:number,
    surname:string,
    content:string,
    image:string,
    date:string,
    id:number
}
type User = {

    id: number,
    userId: number
    name: string,
}

type Result = {
    id: string,
    title: string,
    video: string,
    user: string,
    views: string,
    date: string,
    tag: string

}

type SearchResult = {
    query?:{
        pages?: Result[]
    }
}