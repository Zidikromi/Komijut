import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import CardManga from '../components/CardManga';
import SearchInput from '../components/Search';
import RecomManga from '../components/RecomManga';
import { PopularComic, RecommendedComic } from '../lib/types';
import { getPopularComic, getRecommendedComic,  } from '../lib/api';

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
                    <svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#000">
                        <g fill="none" fillRule="evenodd">
                            <g transform="translate(1 1)" strokeWidth="2">
                                <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
                                <path d="M36 18c0-9.94-8.06-18-18-18">
                                    <animateTransform
                                        attributeName="transform"
                                        type="rotate"
                                        from="0 18 18"
                                        to="360 18 18"
                                        dur="1s"
                                        repeatCount="indefinite" />
                                </path>
                            </g>
                        </g>
                    </svg>
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
