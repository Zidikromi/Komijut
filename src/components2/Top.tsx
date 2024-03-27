
import { PopularComic } from "../lib/types";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay } from 'swiper/modules';
import { Link } from "react-router-dom";

interface PopularMangaProps {
    popular: PopularComic[]

}

const Top = ({ popular }: PopularMangaProps) => {

    return (
        <>
            <div className="flex h-[190px] sm:h-[300px] md:h-[480px]  w-full justify-between ">
                <div className="flex items-center">
                <div className="absolute z-10 text-[40px] sm:text-[66px] md:text-[96px] items-center justify-center pl-6 sm:pl-10 md:pl-20 leading-none text-gradient" style={{ fontFamily: 'Milker' }}>Favorite <br />Comics</div>
                </div>
                <div className="flex ">


                    <div className="relative">
                        <Link to='/manga/one-piece-indonesia/'>
                            <img src='https://wallpapers.com/images/featured/one-piece-c0pujiakubq5rwas.jpg' alt="" className="h-full w-[946px]" />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#fff8f0] to-transparent"></div>
                        </Link>
                    </div>
                </div>

            </div>


        </>

    );
}

export default Top;
