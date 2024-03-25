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

export interface SearchGet {
    results: any
    slice:any
    data: any
    endpoint: any
    title: string
    desc: string
    image: string
    type: string
}

export interface Chapter {
    data: any;
    title: string;
    image: [];
    id: any
    endpoint: string;
    name: string;
}


export interface ChapterDetail {
    endpoint: string;
    data: any;
    title: string;
    image: [];
}


export interface InfoComic {
    data:any
    chapter:any
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