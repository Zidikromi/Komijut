import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { InfoComic } from '../lib/types';
import { getInfoComic } from '../lib/api';
import Navbar from '../components/Navbar';

const Infodetail = () => {
  const { mangaid } = useParams<{ mangaid: string }>();
  const [info, setInfo] = useState<InfoComic | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const infoComic = await getInfoComic(`/manga/${mangaid}`);
        setInfo(infoComic.data);
      } catch (error) {
        console.error('Error fetching comic info:', error);
      }
    };

    fetchData();
  }, [mangaid]);

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-8 p-4 rounded-lg flex justify-center">
        {info ? (
          <div className='flex flex-col'>
            <div className="flex flex-col md:flex-row gap-2 md:h-[400px] md:max-w-4xl">
              <div className="rounded-lg inline-block md:h-full max-w-md">
                <img src={info.thumbnail} alt="Comic" className="w-full h-full rounded-xl" />
              </div>
              <div className="shadow-lg rounded-lg pl-6 md:w-[75%] ">
                <h2 className="text-2xl font-Bold mt-4 mb-2 text-[#d6a76f]" style={{ fontFamily: 'Namafont' }} >{info.title}</h2>
                <p className="text-lg mb-2"><span className="font-semibold">Author:</span> {info.author}</p>
                <p className="text-lg mb-2"><span className="font-semibold">Rating:</span> {info.rating}</p>
                <p className="text-lg mb-2"><span className="font-semibold">Status:</span> {info.status}</p>
                <p className="text-lg mb-2"><span className="font-semibold">Type:</span> {info.type}</p>
                <div className="flex flex-wrap">
                  {info.genre && info.genre.map((genre, index) => (
                    <div key={index} className="bg-gray-200 text-gray-800 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">{genre}</div>
                  ))}
                </div>
              </div>
            </div>
            <div className='shadow-2xl rounded-lg p-6 max-w-4xl mt-5'>
              <h3 className="text-2xl font-semibold mb-4">Chapter List</h3>
              <ul className="divide-y divide-gray-200">
                {info.chapter_list.map((chapter, index) => (
                  <li key={index} className="py-4 flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="text-lg font-semibold">{chapter.name}</span>
                    </div>
                    <Link to={`/manga/${mangaid}/chapter${chapter.endpoint}`} className="text-red-600 hover:text-red-900">Read</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <p className="text-4xl"><span className="loading loading-dots loading-lg"></span></p>
        )}
      </div>
    </>
  );
};

export default Infodetail;
