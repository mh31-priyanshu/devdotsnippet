import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import { useGlobalContext } from '@/ContextApi';

export default function SwipeTagSelector() {
    const {
        themeModeObject:{themeMode}
    } = useGlobalContext();
    return (
    <div className={`${themeMode[1].isSelected?"bg-slate-800":"bg-white"} p-3 rounded-lg flex gap-5`}>
        <div className='overflow-x-auto w-[1112px]'>
            <Swiper
                slidesPerView="auto"
                spaceBetween={10}
                freeMode={true}
                modules={[FreeMode]}
                className="mySwiper"
            >
                <SwiperSlide className='bg-purple-500 p-1 rounded-md text-white w-20'>All</SwiperSlide>
                <SwiperSlide className='text-slate-400'>Slide 2</SwiperSlide>
                <SwiperSlide className='text-slate-400'>Slide 3</SwiperSlide>
                <SwiperSlide className='text-slate-400'>Slide 4</SwiperSlide>
                <SwiperSlide className='text-slate-400'>Slide 5</SwiperSlide>
                <SwiperSlide className='text-slate-400'>Slide 6</SwiperSlide>
                <SwiperSlide className='text-slate-400'>Slide 7</SwiperSlide>
                <SwiperSlide className='text-slate-400'>Slide 8</SwiperSlide>
                <SwiperSlide className='text-slate-400'>Slide 9</SwiperSlide><SwiperSlide className='text-slate-400'>Slide 2</SwiperSlide>
                <SwiperSlide className='text-slate-400'>Slide 3</SwiperSlide>
                <SwiperSlide className='text-slate-400'>Slide 4</SwiperSlide>
                <SwiperSlide className='text-slate-400'>Slide 5</SwiperSlide>
                <SwiperSlide className='text-slate-400'>Slide 6</SwiperSlide>
                <SwiperSlide className='text-slate-400'>Slide 7</SwiperSlide>
                <SwiperSlide className='text-slate-400'>Slide 8</SwiperSlide>
                <SwiperSlide className='text-slate-400'>Slide 9</SwiperSlide>
            </Swiper>
        </div>
        <div className="gap-2 px-3 rounded-3xl max-md:rounded-full bg-purple-500 p-1 text-[13px] text-white top-[5px] right-[6px] items-center cursor-pointer select-none flex">
            <div className="font-bold">+</div>
            <div className="max-md:hidden">Tags</div>
        </div>
    </div>
  );
}
