import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import slider1 from '../../../assets/home/slide1.jpg'
import slider2 from '../../../assets/home/slide2.jpg'
import slider3 from '../../../assets/home/slide3.jpg'
import slider4 from '../../../assets/home/slide4.jpg'
import slider5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../Commponents/SectionTitle';
const Category = () => {
    return (
        <div>
            <SectionTitle subHeading={'From 11:00am to 10:00pm'} heading={'order online'}></SectionTitle>
            <Swiper
                slidesPerView={3}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper w-[1000px] my-10"
            >
                <SwiperSlide className='ml-7'><img className='w-full h-96 object-cover' src={slider1} alt="this is a slider image" /> <p className='uppercase text-4xl text-white  -mt-16 text-center '>salads</p></SwiperSlide>
                <SwiperSlide className='ml-7'><img className='w-full h-96 object-cover' src={slider2} alt="this is a slider image" /> <p className='uppercase text-4xl text-white  -mt-16 text-center '>soups</p></SwiperSlide>
                <SwiperSlide className='ml-7'><img className='w-full h-96 object-cover' src={slider3} alt="this is a slider image" /> <p className='uppercase text-4xl text-white  -mt-16 text-center '>coffee</p></SwiperSlide>
                <SwiperSlide className='ml-7'><img className='w-full h-96 object-cover' src={slider4} alt="this is a slider image" /> <p className='uppercase text-4xl text-white  -mt-16 text-center '>cake</p></SwiperSlide>
                <SwiperSlide className='ml-7'><img className='w-full h-96 object-cover' src={slider5} alt="this is a slider image" /> <p className='uppercase text-4xl text-white  -mt-16 mb-16 text-center'>salads</p></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;