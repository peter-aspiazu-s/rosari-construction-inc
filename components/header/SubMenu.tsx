import { FC, Dispatch, SetStateAction } from 'react';
import Link from 'next/link';

interface SubMenuProps {
    isOpen: boolean; // El estado se pasa como prop
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
                    href="/service/decks" 
                    className='submenu__item'
                    onClick={() => setIsOpen(!isOpen)}
                >Decks</Link>
                <Link 
                    href="/service/trim&gutters" 
                    className='submenu__item'
                    onClick={() => setIsOpen(!isOpen)}
                >Trim & Gutters</Link>
                <Link 
                    href="/service/windows&doors" 
                    className='submenu__item'
                    onClick={() => setIsOpen(!isOpen)}
                >Windows & Doors</Link>
                <Link 
                    href="/service/projects" 
                    className='submenu__item'
                    onClick={() => setIsOpen(!isOpen)}
                >Projects</Link>
                <Link 
                    href="/service/contact" 
                    className='submenu__item'
                    onClick={() => setIsOpen(!isOpen)}
                >Contact Us</Link>
            </div>
        </nav>
    )
}