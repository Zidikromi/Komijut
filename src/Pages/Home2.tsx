import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { PopularComic, RecommendedComic } from '../lib/types';
import { getPopularComic, getRecommendedComic } from '../lib/api';
import Top from '../components2/Top';
import Popularmanga from '../components2/Popularmanga';
import Recommendedcompo from '../components2/recommend';

const Home2 = () => {
    const [recommend, setRecommend] = useState<RecommendedComic[]>([]);
    const [popular, setPopular] = useState<PopularComic[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

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
        setLoading(true);
        await fetchRecommendedData();
        await fetchPopularData();
        setLoading(false);
    };

    useEffect(() => {
        getData();
    }, []);

    const handleNavItemClick = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <Navbar onNavItemClick={handleNavItemClick} />
            {loading ? (
                <div className='flex justify-center items-center h-screen'>
                    <span className="loader"></span>
                </div>
            ) : (
                <>
                    <div id='top'>
                        <Top popular={popular} />
                    </div>
                    <div id='popular'>
                        <Popularmanga popular={popular} />
                    </div>
                    <div id='recommended'>
                        <Recommendedcompo recommend={recommend} />
                    </div>
                </>
            )}
        </>
    );
};

export default Home2;
