import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getChapter, getInfoComic } from '../lib/api';
import { ChapterDetail, InfoComic } from '../lib/types';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import { IoMdArrowBack } from 'react-icons/io';
import { useManga } from '../lib/MangaContext';

function Chapter() {
    const { mangaid, chapterid } = useParams<{ mangaid: string, chapterid: string }>();
    const { setIds } = useManga();

    const [chapter, setChapter] = useState<ChapterDetail | null>(null);
    const [info, setInfo] = useState<InfoComic | null>(null);
    const [nextChapt, setNextChapt] = useState<ChapterDetail | null>(null);
    const [prevChapt, setPrevChapt] = useState<ChapterDetail | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchChapter = async () => {
            try {
                const detailChapter = await getChapter(`/${chapterid}`);
                setChapter(detailChapter.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching chapter:', error);
            }
        };

        const fetchInfoComic = async () => {
            try {
                const detailInfo = await getInfoComic(`/manga/${mangaid}`);
                setInfo(detailInfo.data);
            } catch (error) {
                console.error('Error fetching comic info:', error);
            }
        };

        fetchChapter();
        fetchInfoComic();

        if (chapterid) {
            setIds(mangaid, chapterid);
        }
    }, [mangaid, chapterid, setIds]);


    useEffect(() => {

        if (!chapterid || !info || !info.chapter_list) {
            return;
        }


        const chapterNumber = parseInt(chapterid.match(/\d+/)?.[0] || '0');


        const idx = info.chapter_list.findIndex(ch => {
            const chapterNumberInEndpoint = parseInt(ch.endpoint.match(/\d+/)?.[0] || '0');
            return chapterNumberInEndpoint === chapterNumber;
        });

        const nextChapterIndex = idx !== -1 && idx - 1 >= 0 ? idx - 1 : -1;
        const nextChapter = nextChapterIndex !== -1 ? info.chapter_list[nextChapterIndex] : null;
        setNextChapt(nextChapter);

        // console.log('idx:', idx);
        // console.log('nextChapt:', nextChapter);
    }, [info, chapterid]);

    useEffect(() => {
        if (!chapterid || !info || !info.chapter_list) {
            return;
        }

        const chapterNumber = parseInt(chapterid.match(/\d+/)?.[0] || '0');

        const idx = info.chapter_list.findIndex(ch => {
            const chapterNumberInEndpoint = parseInt(ch.endpoint.match(/\d+/)?.[0] || '0');
            return chapterNumberInEndpoint === chapterNumber;
        });

        const previousChapterIndex = idx !== -1 && idx + 1 < info.chapter_list.length ? idx + 1 : -1;
        const previousChapter = previousChapterIndex !== -1 ? info.chapter_list[previousChapterIndex] : null;
        setPrevChapt(previousChapter);

        // console.log('idx:', idx);
        // console.log('previousChapt:', previousChapter);
    }, [info, chapterid]);


    const GoToNextChapter = () => {
        if (nextChapt && nextChapt.endpoint) {
            window.location.href = `/manga/${mangaid}/chapter${nextChapt.endpoint}`
        } else {
            console.log('Next chapter is not available');

        }
    }

    const GoToPrevChapter = () => {
        if (prevChapt && prevChapt.endpoint) {
            window.location.href = `/manga/${mangaid}/chapter${prevChapt.endpoint}`
        } else {
            console.log('Next chapter is not available');

        }
    }

    if (loading) {
        return (
            <div className="container mx-auto px-4 rounded-lg flex justify-center items-center h-screen">
                <span className="loader"></span>
            </div>
        );
    }

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
                        <Link to={`/manga/${mangaid}`} className='bg-white w-14 h-14 fixed bg-opacity-70 rounded-full flex justify-center items-center mt-4 ml-4 cursor-pointer text-black hover:text-red-800' >
                            <IoMdArrowBack size={20} />
                        </Link>
                        <div className='bg-[#d6a76f] bg-opacity-70 w-full  h-14 max-w-screen-sm bottom-0 flex justify-between items-center px-10'>
                            <div><MdNavigateBefore size={25} onClick={GoToPrevChapter} color='white' className='cursor-pointer' /></div>
                            <div className='font-semibold text-xs md:text-sm text-white'>{chapter.title}</div>
                            <div><MdNavigateNext size={25} onClick={GoToNextChapter} color='white' className='cursor-pointer' /></div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Chapter;
