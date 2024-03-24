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
        <div className='md:px-10 md:py-10 grid grid-cols-1 md:grid-cols-3 gap-4'>
            {popular.map((item, index) => (
                <div
                    key={index}
                    className='relative bg-black'
                    style={{
                        backgroundImage: `url(${item.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        transition: 'background-color 0.3s ease',
                        height: '100%',
                        width: '100%'
                    }}
                >
                    {/* Lapisan dengan opacity menggunakan Tailwind CSS */}
                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-75"></div>
                    <div className='flex flex-col justify-start absolute top-0 left-0 p-4 '>
                        <h2 className='font-bold text-white text-md text-start'>{item.title}</h2>
                        <p className='text-white text-sm'>{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cardtop;
