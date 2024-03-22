import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import CardManga from '../components/CardManga';
import SearchInput from '../components/Search';
import RecomManga from '../components/RecomManga';
import { PopularComic, RecommendedComic } from '../lib/types';
import { getPopularComic, getRecommendedComic, } from '../lib/api';


const Home = () => {
    const [recommend, setRecommend] = useState<RecommendedComic[]>([]);
    const [popular, setPopular] = useState<PopularComic[]>([]);
    const [loading, setLoading] = useState<boolean>(true); // State untuk loading

    useEffect(() => {
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

        fetchRecommendedData();
    }, []);

    useEffect(() => {
        const fetchPopularData = async () => {
            try {
                const popularComics = await getPopularComic();

                if (popularComics && popularComics.data) {
                    setPopular(popularComics.data);
                }
            } catch (error) {
                console.error('Error fetching popular data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPopularData();
    }, []);

    return (
        <>
            <Navbar />
            <SearchInput />
            {loading && (
                <div className="flex justify-center items-center mt-10">
                  <span className="loading loading-ring loading-lg"></span>
                </div>
            )}
            {!loading && (
                <>
                    <CardManga popular={popular} />
                    <RecomManga recommend={recommend} />
                </>
            )}
        </>
    );
};

export default Home;
