import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { InfoComic } from '../lib/types';
import { getInfoComic } from '../lib/api';
import Navbar2 from '../components/Navbar2';


const Infodetail = () => {
  const { mangaid } = useParams<{ mangaid: string }>();
  const [info, setInfo] = useState<InfoComic | null>(null);
  const [lastReadChapter, setLastReadChapter] = useState<string | null>(null);
  const [lastReadChapterName, setLastReadChapterName] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const infoComic = await getInfoComic(`/manga/${mangaid}`);
        setInfo(infoComic.data);

        const lastChapter = localStorage.getItem(`${mangaid}_last_chapter`);
        const lastChapterName = localStorage.getItem(`${mangaid}_last_chapter_name`);
        setLastReadChapter(lastChapter);
        setLastReadChapterName(lastChapterName);
      } catch (error) {
        console.error('Error fetching comic info:', error);
      }
    };

    fetchData();
  }, [mangaid]);


  const handleSetLastReadChapter = (chapterEndpoint: string, chapterName: string) => {
    console.log('Handle Set Last Read Chapter called');
    setLastReadChapter(chapterEndpoint);
    localStorage.setItem(`${mangaid}_last_chapter`, chapterEndpoint);
    localStorage.setItem(`${mangaid}_last_chapter_name`, chapterName);
  };

  return (
    <>
      <Navbar2 />
      <div className="container mx-auto mt-8 p-4 rounded-lg flex justify-center">
        {info ? (
          <div className='flex flex-col'>
            <div className="flex flex-col md:flex-row gap-2 md:h-[400px] md:max-w-4xl items-center">
              <div className="rounded-lg inline-block md:h-full max-w-[321px]">
                <img src={info.thumbnail} alt="Comic" className="w-full h-full rounded-xl " />
              </div>
              <div className="pl-6 md:w-[75%] leading-8 ">
                <h2 className="text-[36px] font-extrabold mt-4 mb-0 text-[#d6a76f] line-clamp-2np " style={{ fontFamily: 'Utendo' }} >{info.title}</h2>
                <div className="divider w-20 sm:w-[150px] md:w-[296px] m-0 divider-gold" ></div>
                <p className="text-[20px] mb-2 text-black" style={{ fontFamily: 'Utendo' }}><span className="font-semibold">Author :</span> {info.author}</p>
                <p className="text-[20px] mb-2 text-black" style={{ fontFamily: 'Utendo' }}><span className="font-semibold">Rating :</span> {info.rating}</p>
                <p className="text-[20px] mb-2 text-black" style={{ fontFamily: 'Utendo' }}><span className="font-semibold">Status :</span> {info.status}</p>
                <p className="text-[20px] mb-2 text-black" style={{ fontFamily: 'Utendo' }}><span className="font-semibold">Type :</span> {info.type}</p>
                <div className="flex flex-wrap">
                  {info.genre && info.genre.map((genre, index) => (
                    <div key={index} className="bg-[#d6a76f] text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">{genre}</div>
                  ))}
                </div>
                {lastReadChapterName && (
                  <Link
                    to={`/manga/${mangaid}/chapter${lastReadChapter}`}
                    className='w-fit border-2 rounded-badge border-[#d6a76f] transition-color duration-300 hover:bg-gradient-to-b from-[#D6A76F] to-[#FFF8F0] flex items-center px-2 gap-1'
                  >
                    {/* <MdOutlinePlayCircle size={20} color='#6B3D07' /> */}
                    <p className='font-semibold items-center px-2 text-[#6B3D07]' style={{ fontFamily: 'Utendo' }}>Last {lastReadChapterName}</p>
                  </Link>
                )}
              </div>
            </div>
            <div className="text-[30px] sm:text-[36px] md:text-[36px] text-center leading-none text-gradient mt-5" style={{ fontFamily: 'Milker' }}>Chapter List</div>
            <div className='max-w-4xl mt-3 max-h-[500px] overflow-y-auto'>
              <ul className="gap-2 px-2 flex flex-col">
                {info.chapter_list.map((chapter, index) => (
                  <li key={index} className="py-4 flex justify-between items-center bg-gradient-to-r from-[#d6a76f] to-[#8C6D48] rounded-2xl">
                    <Link to={`/manga/${mangaid}/chapter${chapter.endpoint}`}
                      className="flex flex-col px-3 text-white"
                      onClick={() => handleSetLastReadChapter(chapter.endpoint, chapter.name)}>
                      <span className="text-lg font-semibold hover:text-[#8C6D48]">{chapter.name}</span>
                    </Link>
                    <Link
                      to={`/manga/${mangaid}/chapter${chapter.endpoint}`}
                      className="text-white hover:text-[#d6a76f] px-3"
                      onClick={() => handleSetLastReadChapter(chapter.endpoint, chapter.name)}
                    >
                      Read
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div className='flex justify-center items-center h-screen'>
            <span className="loader"></span>
          </div>
        )}
      </div>
    </>
  );
};

export default Infodetail;
