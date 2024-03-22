// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import './stylesswiper.css';
// import { Pagination, Navigation } from 'swiper/modules';
// import { useEffect, useState } from 'react';
// import { PopularComic } from '../lib/types';
// import { getPopularComic } from '../lib/api';

// const Cardtop = () => {
//     const [popular, setPopular] = useState<PopularComic[]>([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const popularComics = await getPopularComic();
//                 setPopular(popularComics.data);
//             } catch (error) {
//                 console.error('Error fetching popular comics:', error);
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//         <div className='md:px-10 md:py-10'>
//             {popular.length > 0 && (
//                 <Swiper
//                     slidesPerView={1}
//                     spaceBetween={0}
//                     loop={true}
//                     pagination={{ clickable: false }}
//                     navigation={false}
//                     modules={[Pagination, Navigation]}
//                     className="mySwiper h-60 md:h-96 rounded-xl"
//                 >
//                     {popular.map((item, index) => (
//                         <SwiperSlide
//                             key={index}
//                             className='relative bg-black'
//                             style={{
//                                 backgroundImage: `url(${item.image})`,
//                                 backgroundSize: 'cover',
//                                 backgroundPosition: 'center',
//                                 transition: 'background-color 0.3s ease',
//                                 height: '100%',
//                                 width: '100%'
//                             }}
//                         >
//                             {/* Lapisan dengan opacity menggunakan Tailwind CSS */}
//                             <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-75"></div>
//                             <div className='flex flex-col justify-start absolute top-0 left-0 p-4 '>
//                                 <h2 className='font-bold text-white text-md text-start'>{item.title}</h2>
//                                 <p className='text-white text-sm'>{item.desc}</p>
//                             </div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>
//             )}
//         </div>
//     );
// };

// export default Cardtop;
