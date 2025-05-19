import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Commponents/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
const Testimonials = () => {
    const [reviews, setReviews] = useState([])
  
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className='my-10'>
            <SectionTitle subHeading={'What Our Clients Say'} heading={'Testimonials'}></SectionTitle>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
                    {
                        reviews.map(review => <SwiperSlide key={review._id}>
                            <div className='mx-24  flex flex-col items-center my-10 space-y-4'>
                              <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                             
                                <p className='text-xl'>{review.details}</p>
                                <h1 className='text-3xl text-orange-300 text-center'>{review.name}</h1>
                            </div>
                        </SwiperSlide>)
                    }

                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;