import { PopularComic } from "../lib/types";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './styles.css'
// import './styleswiper.css';
import { Autoplay, FreeMode, Navigation } from 'swiper/modules';
import Popularsvg from "../assets/Popularsvg";
// import required modules

interface PopularMangaProps {
    popular: PopularComic[]

}

const Popularmanga = ({ popular }: PopularMangaProps) => {

    return (
        <div className="flex h-[100%] sm:h-[100vh] md:h-[100vh] lg:h-[480px] w-full justify-between items-center  md:mt-1 flex-col-reverse lg:flex-row gap-2 ">
            <div className="w-[100%] sm:w-[100%] flex items-center lg:w-[58%] ">
                <Swiper
                    slidesPerView={2}
                    spaceBetween={10}
                    freeMode={false}
                    centeredSlides={true}

                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    loop={true}
                    navigation={false}
                    modules={[FreeMode, Navigation, Autoplay]}
                    className="mySwiper lg:ml-20"
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 0,
                        },
                    }}
                    effect={'creative'}
                >
                    {popular.map((comic, index) => (
                        <SwiperSlide key={index} className="pb-10 md:h-[433.79px] sm:h-[350.79px]  lg:w-[434.63px]" >
                            <Link to={comic.endpoint.startsWith('/') ? comic.endpoint.substring(1) : comic.endpoint} className="group block rounded-[25.07px] overflow-hidden shadow-md h-full bg-gradient-to-r from-[#D6A76F] to-[#8C6D48] ">
                                <img src={comic.image} alt="Manga Cover" className="w-full h-[100px] sm:h-[140px] md:h-[200px] object-cover" />
                                <div className="p-4">
                                    <h2 className="text-[12px] sm:text-[15.75px] md:text-[20.75px] font-semibold  text-white  text-start line-clamp-1" style={{ fontFamily: 'Utendo' }}>{comic.title}</h2>
                                    <div className="divider w-20 sm:w-24 md:w-36 m-0 divider-neutral" ></div>
                                    <p className="font-bold mt-0 text-start text-[8px] sm:text-[10px] md:text-[13px] text-white" style={{ fontFamily: 'Utendo' }}>{comic.type}</p>
                                    <p className="text-start text-[8px] sm:text-[11px]  md:text-[12.54px] text-white leading-3 md:leading-4 md:line-clamp-4 line-clamp-3" style={{ fontFamily: 'Utendo' }}>{comic.desc}</p>
                                    <div className="flex items-center  gap-2 mt-2">
                                        <div className="border rounded-badge hover:bg-gradient-to-t from-[#FFF8F0] to-[#D6A76F] transition ease-in-out duration-1000 flex items-center justify-center">
                                            <p className="px-3 text-[8px] sm:text-[9px] md:text-[10px] text-white py-1" style={{ fontFamily: 'Utendo' }}>Read More</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="h-full flex items-center px-16 lg:w-full mt-2" >
                <Popularsvg />
            </div>
            {/* <h1 className="text-3xl font-bold text-center mb-6">Popular Manga</h1> */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"> */}

        </div >
    );
}

export default Popularmanga;
