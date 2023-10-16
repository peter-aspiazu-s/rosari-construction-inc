import { FC } from 'react';
import Link from 'next/link';

interface Props {
    title: string;
    subtitle: string;
    textButton: string;
    link: string;
}

export const CheckOurOtherServices: FC<Props> = ({title, subtitle, textButton, link}) => {
    return (
        <div className='checkourotherservices'>
            <div className='checkourotherservices__container'>
                <div className='checkourotherservices__text'>
                    <div className='checkourotherservices__title'>{title}</div>
                    <div className='checkourotherservices__subtitle'>{subtitle}</div>
                </div>
                <Link href={link} className='checkourotherservices__button'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M400-280v-400l200 200-200 200Z"/></svg>
                    {textButton}
                </Link>
            </div>
        </div>
    )
}