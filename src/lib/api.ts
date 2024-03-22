import { KOMIKU_BASE_URL } from './constant';
import { InfoComic, PopularComic, RecommendedComic } from './types';

export const getPopularComic = async () => {
    const options: RequestInit = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    try {
        const popularResponse = await fetch(`${KOMIKU_BASE_URL}/popular/page/1`, options);
        const popularData: PopularComic = await popularResponse.json();
        console.log('Popular Comics:', popularData);
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
        const recommendResponse = await fetch(`${KOMIKU_BASE_URL}/recommended/page/1?limit=10`, options);
        const recommendData: RecommendedComic = await recommendResponse.json();
        console.log('Recommended Comics:', recommendData);
        return recommendData;
    } catch (error) {
        console.error('Error fetching recommended comics:', error);
        throw error;
    }
}


// export const getRecommendedComic = async () => {


//     try {
//         const response = await fetch(`${KOMIKU_BASE_URL}/recommended/page/1`,);
//         const data2: RecommendedComic = await response.json();
//         // console.log('ambas', data2);
//         return data2;
//     } catch (error) {
//         console.error('Error fetching recommended comics:', error);
//         throw error;
//     }
// };

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
