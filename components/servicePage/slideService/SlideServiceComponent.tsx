import { FC } from 'react';
import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';


interface Props {
    imageArray?: arrImageType[];
}

type arrImageType = {
    img: string;
    alt: string;
}

export const SlideServiceComponent: FC<Props> = ({imageArray}) => {
    return (
        <div className='slideservicecomponent'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="slideservicecomponent__swiper"
            >
                {
                    imageArray?.map(({img, alt}) => (
                        <SwiperSlide key={img} className="slideservicecomponent__swiper-slide">
                            <Image src={img} alt={alt} layout="fill" />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}