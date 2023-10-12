import { FC } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { Dancing_Script } from '@next/font/google';


const dacing_script = Dancing_Script({
    subsets: ['latin'],
    weight: ['400', '700']
})

export const ReviewsComponents: FC = () => {
    return (
        <div className="reviewcomponent">
            <div className="reviewcomponent__container">
                <div className="reviewcomponent__container-text">
                    <div className={`${dacing_script.className} reviewcomponent__container-text-title`}>Mission Statement</div>
                    <div className="reviewcomponent__container-text-description">
                        Besroi construction is a complete exterior company. Besroi has been trusted by home builders, developers, federal contractors, and individuals. Our goal is to give any customer the highest quality and service for
                        <Link href="/service/projects" className="reviewcomponent__container-text-link"> any size job</Link>. From a single shingle repair to a large scale condo project, Besroi can be trusted to provide year-round service for any person or business in Western New York.
                    </div>
                    <div className="reviewcomponent__container-text-call">
                        <div className="reviewcomponent__container-text-calltoaction">Find Reviews For Besroi Roofing</div>
                        <a href="#" className="reviewcomponent__container-text-button">Call Now!</a>
                    </div>
                </div>

                <div className="reviewcomponent__container-video-map">
                    <div className="reviewcomponent__container-video">
                        {/* Aquí va el vídeo */}
                    </div>
                    <div className="reviewcomponent__container-map">
                        <div className="reviewcomponent__container-logo">
                            {/* <Image src="" alt="" layout="fill" /> */}
                        </div>
                        <div className="reviewcomponent__container-map-location">
                            {/* Aquí va el mapa */}
                        </div>
                    </div>
                </div>

                <div className="reviewcomponent__container-slide">
                    <div className="reviewcomponent__container-review">
                        {/* <div className="reviewcomponent__container-ico-text">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M320-520q17 0 28.5-11.5T360-560q0-17-11.5-28.5T320-600q-17 0-28.5 11.5T280-560q0 17 11.5 28.5T320-520Zm160 0q17 0 28.5-11.5T520-560q0-17-11.5-28.5T480-600q-17 0-28.5 11.5T440-560q0 17 11.5 28.5T480-520Zm160 0q17 0 28.5-11.5T680-560q0-17-11.5-28.5T640-600q-17 0-28.5 11.5T600-560q0 17 11.5 28.5T640-520ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/></svg>
                            <div>Scroll Through Video Reviews</div>
                        </div>
                        <div className="reviewcomponent__container-ico-start">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m354-247 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-80l65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Zm247-350Z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m354-247 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-80l65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Zm247-350Z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m354-247 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-80l65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Zm247-350Z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m354-247 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-80l65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Zm247-350Z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m480-323 126 77-33-144 111-96-146-13-58-136v312ZM233-80l65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z"/></svg>
                        </div> */}
                    </div>
                    <div className="reviewcomponent__container-slide-swiper">
                        {/* Aquí va el swiper slide */}
                    </div>
                </div>
            </div>
        </div>
    )
}