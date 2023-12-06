import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import sliderImg1 from '../../../assets/home/slide1.jpg';
import sliderImg2 from '../../../assets/home/slide2.jpg';
import sliderImg3 from '../../../assets/home/slide3.jpg';
import sliderImg4 from '../../../assets/home/slide4.jpg';
import sliderImg5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../components/SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle
                subHeading={'From 10.00am to 10.00pm'}
                heading={'order online'}
            >
            </SectionTitle>
            <div className='text-center py-6 mb-6'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src={sliderImg1} alt="" />
                        <p className='-mt-12 text-center text-white'>SALADS</p>
                    </SwiperSlide>
                    <SwiperSlide><img src={sliderImg2} alt="" />
                        <p className='-mt-12 text-center text-white'>PIZZAS</p>
                    </SwiperSlide>
                    <SwiperSlide><img src={sliderImg3} alt="" />
                        <p className='-mt-12 text-center text-white'>SOUPS</p>
                    </SwiperSlide>
                    <SwiperSlide><img src={sliderImg4} alt="" />
                        <p className='-mt-12 text-center text-white'>DESERTS</p>
                    </SwiperSlide>
                    <SwiperSlide><img src={sliderImg5} alt="" />
                        <p className='-mt-12 text-center text-white'>SALADS</p>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Category;

