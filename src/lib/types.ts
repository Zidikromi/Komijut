export interface PopularComic {
    data: any
    endpoint: any
    title: string
    desc: string
    image: string
    type: string
}

export interface RecommendedComic {
    slice:any
    data: any
    endpoint: any
    title: string
    desc: string
    image: string
    type: string
}

export interface InfoComic {
    data:any
    title: string
    desc: string
    image: string
    author: string
    rating: string
    thumbnail:string
    genre: []
    status: string
    type: string
}