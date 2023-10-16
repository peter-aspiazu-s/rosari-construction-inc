import { FC, useState, useRef, useEffect } from 'react';
import Image from 'next/image';


export const CallToActionFooter: FC = () => {

    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement | null>(null);


    useEffect(() => {

        const offset = 200;

        const handleScroll = () => {

            if(containerRef.current){

                // Obtén la posición del componente en la ventana
                const rect = containerRef.current.getBoundingClientRect();
        
                // Comprueba si el componente está al menos parcialmente visible en la ventana
                if (rect.top + offset < window.innerHeight && rect.bottom >= 0) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='calltoactionfooter'>
            <div className={`calltoactionfooter__container ${isVisible ? 'calltoactionfooter__container-visible' : ''}`} ref={containerRef}>
                For more information about the services we provide, <span>contact us</span> at <a href="#">716-684-0355</a>. We offer free estimates and require no money down!
            </div>
            <div className='calltoactionfooter__logo'>
                <Image src='/images/logo-rosari-construction.png' alt='Imagen de logo' layout='fill' />
            </div>
        </div>
    )
}