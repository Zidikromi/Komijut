import { RecommendedComic } from "../lib/types";
import { Link } from "react-router-dom";
import { FaChevronCircleRight } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './styleswiper.css';
import { FreeMode } from 'swiper/modules';
// import required modules

interface RecomMangaProps {
    recommend: RecommendedComic[]
}
const RecomManga = ({ recommend }: RecomMangaProps) => {
    return (
        <div className="container mx-auto mt-8 px-4">
            <h1 className="text-3xl font-bold text-center mb-6">Recommended Manga</h1>
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"> */}
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode]}
                className="mySwiper"
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
            >
                {recommend.map((recom, i) => (
                    <SwiperSlide key={i} className="pb-10" style={{ height: '520px' }}>
                        <Link to={recom.endpoint.startsWith('/') ? recom.endpoint.substring(1) : recom.endpoint} className="group block rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:scale-105" style={{ height: '100%' }}>
                            <img src={recom.image} alt="Manga Cover" className="w-full h-60 object-cover" />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold mb-2 group-hover:text-red-600 text-start">{recom.title}</h2>
                                <p className="text-start opacity-55">{recom.desc}</p>
                                <p className="font-bold mt-1 text-start">{recom.type}</p>
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="text-sm font-medium opacity-55  group-hover:text-red-600">Read More</span>
                                    <FaChevronCircleRight className="opacity-55 group-hover:text-red-600" />
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* </div> */}
        </div>
    );
}

export default RecomManga;
