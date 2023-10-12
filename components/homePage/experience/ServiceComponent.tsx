import { FC } from 'react';
import { Dancing_Script } from '@next/font/google';
import Link from 'next/link';


interface Props {
    title: string; 
    description: string;
    image: string;
    link: string;
}

const dacing_script = Dancing_Script({
    subsets: ['latin'],
    weight: ['400', '700']
})

export const ServiceComponent: FC<Props> = ({title, description, image, link}) => {
    return (
        <Link href={link} passHref
            className='servicecomponent'
            style={{
                backgroundImage:`url(${image})`
            }}    
        >
            <div className='servicecomponent__background'></div>
            <div className={`${dacing_script.className} servicecomponent__title`}>{title}</div>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
            <div className='servicecomponent__description'>{description}</div>
        </Link>
    )
}