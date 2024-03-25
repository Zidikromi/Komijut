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
        const recommendResponse = await fetch(`${KOMIKU_BASE_URL}/recommended/page/1`, options);
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
        console.log(data);
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
        console.log('Chapter Detail', data);
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
        console.log('search GEt', data);
        return data;
    } catch (error) {
        console.error('Error fetching Search:', error);
        throw error;
    }
};

// export const GetSearch = async (q: string) => {
//     const options: RequestInit = {
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         mode: 'cors',
//     };

//     try {
//         // Fetch search results
//         const response = await fetch(`${KOMIKU_BASE_URL}/search/${q}`, options);
//         const searchData: SearchGet = await response.json();
//         console.log('Search data:', searchData);

//         if (searchData.results) { // Check if searchData.results is not undefined
//             // Fetch comic info for each result
//             const infoPromises = searchData.results.map(async (result) => {
//                 try {
//                     const infoResponse = await fetch(`${KOMIKU_BASE_URL}/info${result.endpoint}`, options);
//                     const infoData: InfoComic = await infoResponse.json();
//                     return { ...result, info: infoData }; // Merge search result with comic info
//                 } catch (error) {
//                     console.error('Error fetching comic info:', error);
//                     throw error;
//                 }
//             });

//             // Wait for all info requests to finish
//             const combinedData = await Promise.all(infoPromises);
//             console.log('Combined data:', combinedData);
//             return combinedData;
//         } else {
//             console.error('Search results not found');
//             return [];
//         }
//     } catch (error) {
//         console.error('Error fetching Search:', error);
//         throw error;
//     }
// };
