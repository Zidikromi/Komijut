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

export interface Chapter {
    endpoint: string;
    name: string;
}


export interface ChapterDetail {
    data:any
    title: string;
    image: [];
}

export interface InfoComic {
    data:any
    title: string
    desc: string
    image: string
    author: string
    chapter_list: Chapter[]
    rating: string
    thumbnail:string
    genre: []
    status: string
    type: string
}