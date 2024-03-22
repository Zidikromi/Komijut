import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { InfoComic } from '../lib/types';
import { getInfoComic } from '../lib/api';
import Navbar from '../components/Navbar';
import { LoadingSVG } from '../icon';



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
        {/* <h1 className="text-3xl font-semibold mb-4">Detail Komik</h1> */}
        {info ? (
          <div className="flex flex-col md:flex-row gap-4 md:h-max">
            <div className="bg-white rounded-lg inline-block md:h-full">
              <img src={info.thumbnail} alt="Comic" className="w-full h-auto md:max-w-md" />
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 md:w-[60%] ">
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
        ) : (
          <p className="text-lg"><svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#000">
            <g fill="none" fill-rule="evenodd">
              <g transform="translate(1 1)" stroke-width="2">
                <circle stroke-opacity=".5" cx="18" cy="18" r="18" />
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
          </svg></p>
        )}
      </div>
    </>
  );
};

export default Infodetail;