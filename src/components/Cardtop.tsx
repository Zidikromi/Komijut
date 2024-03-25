import { useEffect, useState } from 'react';
import { PopularComic } from '../lib/types';
import { getPopularComic } from '../lib/api';

const Cardtop = () => {
    const [popular, setPopular] = useState<PopularComic[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const popularComics = await getPopularComic();
                console.log('KanjutKuda', popularComics.data)
                setPopular(popularComics.data);
            } catch (error) {
                console.error('Error fetching popular comics:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='container mx-auto mt-8 px-4'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {popular.map((item, index) => (
                    <div
                        key={index}
                        className='card bg-base-100 shadow-xl rounded-lg overflow-hidden'
                    >
                        <figure>
                            <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
                        </figure>
                        <div className="card-body p-4">
                            <h2 className="card-title text-lg font-semibold mb-2">{item.title}</h2>
                            <p className="text-sm text-gray-700">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cardtop;
