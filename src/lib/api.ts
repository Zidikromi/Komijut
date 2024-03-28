import { KOMIKU_BASE_URL } from './constant';
import { ChapterDetail, InfoComic, PopularComic, RecommendedComic, SearchGet } from './types';

export const getPopularComic = async () => {
    const options: RequestInit = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    try {
        const popularResponse = await fetch(`${KOMIKU_BASE_URL}/popular/page/1`, options);
        const popularData: PopularComic = await popularResponse.json();
        // console.log('Popular Comics:', popularData);
        return popularData;
    } catch (error) {
        console.error('Error fetching popular comics:', error);
        throw error;
    }
};

export const getRecommendedComic = async () => {
    const options: RequestInit = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    try {
        const recommendResponse = await fetch(`${KOMIKU_BASE_URL}/recommended/page/1`, options);
        const recommendData: RecommendedComic = await recommendResponse.json();
        // console.log('Recommended Comics:', recommendData);
        return recommendData;
    } catch (error) {
        console.error('Error fetching recommended comics:', error);
        throw error;
    }
}



export const getInfoComic = async (endpoint: string) => {
    const options: RequestInit = {
        headers: {
            'Content-Type': 'application/json',
        },
        mode: 'cors',
    };

    try {
        const response = await fetch(`${KOMIKU_BASE_URL}/info${endpoint}`, options);
        const data: InfoComic = await response.json();
        // console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching comic info:', error);
        throw error;
    }
};


export const getChapter = async (endpoint: string) => {
    const options: RequestInit = {
        headers: {
            'Content-Type': 'application/json',
        },
        mode: 'cors',
    };

    try {
        const response = await fetch(`${KOMIKU_BASE_URL}/chapter${endpoint}`, options);
        const data: ChapterDetail = await response.json();
        // console.log('Chapter Detail', data);
        return data;
    } catch (error) {
        console.error('Error fetching comic info:', error);
        throw error;
    }
};

export const GetSearch = async (q: string) => {
    const options: RequestInit = {
        headers: {
            'Content-Type': 'application/json',
        },
        mode: 'cors',
    };

    try {
        const response = await fetch(`${KOMIKU_BASE_URL}/search/${q}`, options);
        const data: SearchGet = await response.json();
        // console.log('search GEt', data);
        return data;
    } catch (error) {
        console.error('Error fetching Search:', error);
        throw error;
    }
};


