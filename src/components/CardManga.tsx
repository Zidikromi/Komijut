import { useEffect, useState } from "react";
import { PopularComic } from "../lib/types";
import { getPopularComic } from "../lib/api";
import { Link } from "react-router-dom";
import { FaChevronCircleRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './styleswiper.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

interface PopularMangaProps {
    popular: PopularComic[]

}

const CardManga = ({ popular }: PopularMangaProps) => {

    return (
        <div className="container mx-auto mt-8 px-4">
            <h1 className="text-3xl font-bold text-center mb-6">Popular Manga</h1>
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"> */}
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                className="mySwiper"
                breakpoints={{
                    // Konfigurasi untuk layar dengan lebar lebih kecil dari 768px (misalnya, mobile)
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    // Tambahkan konfigurasi tambahan di sini sesuai kebutuhan
                }}
            >
                {popular.map((comic, index) => (
                    <SwiperSlide key={index} className="pb-10" style={{ height: '520px' }}>
                        <Link to={comic.endpoint} className="group block rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:scale-105" style={{ height: '100%' }}>
                            <img src={comic.image} alt="Manga Cover" className="w-full h-64 object-cover" />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold mb-2 group-hover:text-red-600 text-start">{comic.title}</h2>
                                <p className="text-gray-600 text-start">{comic.desc}</p>
                                <p className="text-gray-600 font-bold mt-1 text-start">{comic.type}</p>
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="text-sm font-medium text-gray-500 group-hover:text-red-600">Read More</span>
                                    <FaChevronCircleRight className="text-gray-500 group-hover:text-red-600" />
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default CardManga;
