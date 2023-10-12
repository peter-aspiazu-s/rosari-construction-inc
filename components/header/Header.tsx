import { FC, Dispatch, SetStateAction } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "./Navbar";

interface Props {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const HeaderComponent: FC<Props> = ({isOpen, setIsOpen}) => {
    return(
        <header className="headercomponent">
            <div className="headercomponent__container">
                <div className="headercomponent__container-image">
                    <Link href="/" passHref>
                        <div className="headercomponent__size-image">
                            <Image src="/images/logo.png" alt="Logo" layout="fill" />
                        </div>
                    </Link>
                </div>
                <div className="headercomponent__container-icomenu">
                    <svg 
                        onClick={() => setIsOpen(!isOpen)}
                        xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>

                    <Navbar />
                </div>
                <div className="headercomponent__container-callme">
                    <p className="headercomponent__text-callme">Call Us Today!
                        <a href="#" className="headercomponent__link-callme">716-684-0355</a>
                    </p>
                </div>
            </div>
        </header>
    )
}