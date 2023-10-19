import { FC, Dispatch, SetStateAction } from "react";
import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';


interface Props {
    imgArr: ImageType[];
    setRecommendationVideoHome: Dispatch<SetStateAction<string>>;
}

type ImageType = {
    img: string;
    alt: string;
    link: string;
}

export const SlideRecommendationVideo: FC<Props> = ({imgArr, setRecommendationVideoHome}) => {

    const handleClick = (link: string) => {
        setRecommendationVideoHome(link);
    }

    return (
        <div className="sliderecommendationvideo">
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                // loop={true}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1440: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                }}
                navigation={true}
                modules={[ Navigation]}
                className="sliderecommendationvideo__container"
            >
                {
                    imgArr.map(({img, alt, link}) => (
                        <SwiperSlide 
                                key={img}
                                className="sliderecommendationvideo__image" 
                            >
                                <Image 
                                    src={img} 
                                    alt={alt} 
                                    layout="fill" 
                                    onClick={() => handleClick(link)}
                                />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}