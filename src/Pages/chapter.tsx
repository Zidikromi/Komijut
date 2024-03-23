import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getChapter, getInfoComic } from '../lib/api';
import { ChapterDetail, InfoComic } from '../lib/types';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import { IoMdArrowBack } from 'react-icons/io';

function Chapter() {
    const { mangaid, chapterid } = useParams<{ mangaid: string, chapterid: string }>();

    const [chapter, setChapter] = useState<ChapterDetail | null>(null);
    const [,setInfo] = useState<InfoComic | null>(null);

    console.log(mangaid)
    useEffect(() => {
        const fetchChapter = async () => {
            try {
                const detailChapter = await getChapter(`/${chapterid}`);
                setChapter(detailChapter.data);
            } catch (error) {
                console.error('Error fetching chapter:', error);
            }
        };

        fetchChapter();
    }, [chapterid]);

    useEffect(() => {
        const fetchInfoComic = async () => {
            try {
                const detailInfo = await getInfoComic(`/manga/${mangaid}`);
                setInfo(detailInfo.data);
            } catch (error) {
                console.error('Error fetching comic info:', error);
            }
        };

        fetchInfoComic();
    }, [mangaid]);



    return (
        <>
            <div className="container mx-auto px-4 rounded-lg flex justify-center">
                {chapter && (
                    <div className='flex flex-col'>
                        <div className='w-full max-w-screen-sm'>
                            {chapter.image.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Page ${index + 1}`}
                                    style={{ width: '100%', height: 'auto' }}
                                    className='block mx-auto '
                                />
                            ))}
                        </div>
                        <div className='bg-white w-14 h-14 fixed bg-opacity-70 rounded-full flex justify-center items-center mt-4 ml-4 cursor-pointer text-black hover:text-red-800' onClick={() => window.history.back()}>
                            <IoMdArrowBack size={20} />
                        </div>
                        <div className='bg-black bg-opacity-70 w-full fixed h-14 max-w-screen-sm bottom-0 flex justify-between items-center px-10'>
                            <div><MdNavigateBefore size={25}/></div>
                            <div className='font-semibold'>{chapter.title}</div>
                            <div><MdNavigateNext  size={25}/></div>

                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Chapter;
