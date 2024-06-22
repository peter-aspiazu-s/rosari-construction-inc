import { FC, Dispatch, SetStateAction, useState, useEffect, useRef  } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "./Navbar";
import { SubMenu } from './SubMenu';

interface Props {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const HeaderComponent: FC<Props> = ({isOpen, setIsOpen}) => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return(
        <header className={`headercomponent ${scrolled ? "scrolled" : ""}`}>
            <div className="headercomponent__container">
                <div className="headercomponent__container-image">
                    <Link href="/" passHref>
                        <div className={`headercomponent__size-image ${scrolled ? "headercomponent__size-image-min" : ""}`}>
                            <Image src="/images/logo-rosari-construction.png" alt="Logo" layout="fill" />
                        </div>
                    </Link>
                </div>
                <div className="headercomponent__container-icomenu">
                    <svg 
                        onClick={() => setIsOpen(!isOpen
                            )}
                        xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>

                    <Navbar />
                </div>
                <div className="headercomponent__container-callme">
                    <p className="headercomponent__text-callme">Call Us Today!
                        <a href="tel:+18455488278" className="headercomponent__link-callme">845-548-8278</a>
                    </p>
                </div>
            </div>
            <SubMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </header>
    )
}