import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { InfoComic } from '../lib/types';
import { getInfoComic } from '../lib/api';
import Navbar from '../components/Navbar';



const Infodetail = () => {
  const { id } = useParams<{ id: string }>();
  const [info, setInfo] = useState<InfoComic | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const infoComic = await getInfoComic(`/manga/${id}`);
        setInfo(infoComic.data);
      } catch (error) {
        console.error('Error fetching comic info:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-8 p-4 rounded-lg flex justify-center">
        {info ? (
          <div className='flex flex-col'>
            <div className="flex flex-col md:flex-row gap-2 md:h-[400px] md:max-w-4xl">
              <div className="bg-white rounded-lg inline-block md:h-full max-w-md">
                <img src={info.thumbnail} alt="Comic" className="w-full h-full rounded-xl" />
              </div>
              <div className="bg-white shadow-lg rounded-lg pl-6 md:w-[65%] ">
                <h2 className="text-2xl font-semibold mb-4">{info.title}</h2>
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
            <div className='bg-white shadow-2xl rounded-lg p-6 max-w-4xl mt-5'>
              <p>Chapter List</p>
              <p>Chapter List</p>
              <p>Chapter List</p>
              <p>Chapter List</p>
              <p>Chapter List</p>
              <p>Chapter List</p>
              <p>Chapter List</p>
              <p>Chapter List</p>
              <p>Chapter List</p>
              <p>Chapter List</p>
              <p>Chapter List</p>
              <p>Chapter List</p>
              <p>Chapter List</p>
            </div>
          </div>
        ) : (
          <p className="text-4xl"><span className="loading loading-ring loading-lg"></span></p>
        )}
      </div>
    </>
  );
};

export default Infodetail;