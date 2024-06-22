import { FC, Dispatch, SetStateAction } from 'react';
import Link from 'next/link';

interface SubMenuProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const SubMenu: FC<SubMenuProps> = ({isOpen, setIsOpen}) => {
    return (
        <nav className='submenu'>
            <div className={
                `submenu__container
                ${isOpen 
                ? 'submenu__container-active' 
                : ''}`
            }>
                <Link 
                    href="/" 
                    className='submenu__item'
                    onClick={() => setIsOpen(!isOpen)}
                >Home</Link>
                <Link 
                    href="/service/roofing" 
                    className='submenu__item'
                    onClick={() => setIsOpen(!isOpen)}
                >Roofing</Link>
                <Link 
                    href="/service/siding" 
                    className='submenu__item'
                    onClick={() => setIsOpen(!isOpen)}
                >Siding</Link>
                <Link 
                    href="/service/drywall" 
                    className='submenu__item'
                    onClick={() => setIsOpen(!isOpen)}
                >Drywall</Link>
                <Link 
                    href="/service/welding" 
                    className='submenu__item'
                    onClick={() => setIsOpen(!isOpen)}
                >Welding</Link>
                {/* <Link 
                    href="/service/windows&doors" 
                    className='submenu__item'
                    onClick={() => setIsOpen(!isOpen)}
                >Windows & Doors</Link>
                <Link 
                    href="/company-information/projects" 
                    className='submenu__item'
                    onClick={() => setIsOpen(!isOpen)}
                >Projects</Link> */}
                <Link 
                    href="/company-information/contact" 
                    className='submenu__item'
                    onClick={() => setIsOpen(!isOpen)}
                >Contact Us</Link>
            </div>
        </nav>
    )
}