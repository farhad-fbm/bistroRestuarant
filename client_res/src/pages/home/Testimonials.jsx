
import { SectionTitle } from '../shared/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import { useState, useEffect } from 'react';


import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'


export const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('reviews.json')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [])
  return (
    <section>
      <SectionTitle heading={'Testimonials'} subHeading='What Our Client Say' />
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
          reviews.map(review => <SwiperSlide key={review._id}>
            <div className='m-24'>
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <p>{review.details}</p>
              <h3 className="text-2xl text-orange-400">{review.name}</h3>
            </div>
          </SwiperSlide>)
        }
      </Swiper>
    </section>
  )
}
