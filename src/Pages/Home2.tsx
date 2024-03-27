import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';


import { PopularComic, RecommendedComic } from '../lib/types';
import { getPopularComic, getRecommendedComic, } from '../lib/api';
import Top from '../components2/Top';
import Popularmanga from '../components2/Popularmanga';
import Recommendedcompo from '../components2/recommend';




const Home2 = () => {
    const [recommend, setRecommend] = useState<RecommendedComic[]>([]);
    const [popular, setPopular] = useState<PopularComic[]>([]);
 

    const fetchRecommendedData = async () => {
        try {
            const recommang = await getRecommendedComic();

            if (recommang && recommang.data) {
                setRecommend(recommang.data);
            }
        } catch (error) {
            console.error('Error fetching recommended data:', error);
        }
    };

    const fetchPopularData = async () => {
        try {
            const popularComics = await getPopularComic();

            if (popularComics && popularComics.data) {
                setPopular(popularComics.data);
            }
        } catch (error) {
            console.error('Error fetching popular data:', error);
        }
    };

    const getData = async () => {
        await fetchRecommendedData();
        await fetchPopularData();
    }

    useEffect(() => {
        getData()
    }, []);
    return (
        <>
            <Navbar />
            <Top popular={popular} />
            <Popularmanga popular={popular} />
            <Recommendedcompo recommend={recommend} />
            {/* <SearchInput /> */}
            {/* {loading && (
                <div className="flex justify-center items-center mt-10">
                    <span className="loading loading-dots loading-lg"></span>
                </div>
            )}
            {!loading && ( */}
            <>

                {/* <CardManga popular={popular} /> */}
                {/* <Cardtop /> */}

                {/* <RecomManga recommend={recommend} /> */}
            </>
            {/* )} */}
        </>
    );
};

export default Home2;
