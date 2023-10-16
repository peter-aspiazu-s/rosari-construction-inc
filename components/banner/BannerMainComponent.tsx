import { FC } from 'react';
import Image from 'next/image';
import { Dancing_Script } from '@next/font/google';

interface Props {
    image: string;
    imageTitle: string
}

const dacing_script = Dancing_Script({
    subsets: ['latin'],
    weight: ['400', '700']
})

export const BannerMainComponent: FC<Props> = ({image, imageTitle}) => {
    return (
        <div className='bannermaincomponent'>
            
            <Image src={image} alt={imageTitle} layout='fill'/>
            <div className='bannermaincomponent__background'></div>

            <div className='bannermaincomponent__container'>
                <div 
                    className={`${dacing_script.className} bannermaincomponent__container-text`}
                >Protecting & Beautifying Your Home!</div>
                <div className='bannermaincomponent__container-link'>
                    <a className='bannermaincomponent__link' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>
                        <p>Buffalo: 716-684-0355</p>
                    </a>
                    <a className='bannermaincomponent__link' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>
                        <p>Rochester: 585-254-3800</p>
                    </a>
                </div>
            </div>
        </div>
    )
}