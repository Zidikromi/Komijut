import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getChapter } from '../lib/api';
import { ChapterDetail } from '../lib/types';

function Chapter() {
    const { id } = useParams<{ id: string }>();
    const [chapter, setChapter] = useState<ChapterDetail | null>(null);

    useEffect(() => {
        const fetchChapter = async () => {
            try {
                const detailChapter = await getChapter(`/${id}`);
                setChapter(detailChapter.data);
            } catch (error) {
                console.error('Error fetching comic info:', error);
            }
        };

        fetchChapter();
    }, [id]);

    return (
        <>
            <div className="container mx-auto  px-4 rounded-lg flex justify-center "> 
                {chapter && (
                    <div className='flex flex-col'>
                        <div className='w-[24rem]'>
                            {chapter.image.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Page ${index + 1}`}
                                    style={{ height: 'auto',  }}
                                    className='w-full'
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Chapter;
