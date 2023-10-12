import { FC } from 'react';
import Image from 'next/image';


export const CallToActionFooter: FC = () => {
    return (
        <div className='calltoactionfooter'>
            <div className='calltoactionfooter__container'>
                For more information about the services we provide, <span>contact us</span> at <a href="#">716-684-0355</a>. We offer free estimates and require no money down!
            </div>
            <div className='calltoactionfooter__logo'>
                <Image src='/images/logo.png' alt='Imagen de logo' layout='fill' />
            </div>
        </div>
    )
}