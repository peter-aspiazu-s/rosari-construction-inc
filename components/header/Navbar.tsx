import { FC } from 'react';
import Link from "next/link";
import { useRouter } from 'next/router';

export const Navbar: FC = () => {

    const router = useRouter();

    const path = router.asPath;

    return (
        <nav className="navbar">
            <div className="navbar__container">
                <Link 
                    href="/" 
                    className="navbar__item"
                    style={{
                        color:path === "/" ? 'red' : 'aliceblue'
                    }}
                >HOME</Link>
                <Link 
                    href="/service/roofing" 
                    className="navbar__item"
                    style={{
                        color:path === "/service/roofing" ? 'red' : 'aliceblue'
                    }}
                >ROOFING</Link>
                <Link 
                    href="/service/siding" 
                    className="navbar__item"
                    style={{
                        color:path === "/service/siding" ? 'red' : 'aliceblue'
                    }}
                >SIDING</Link>
                {/* <Link 
                    href="/service/decks" 
                    className="navbar__item"
                    style={{
                        color:path === "/service/decks" ? 'red' : 'aliceblue'
                    }}
                >DECKS</Link>
                <Link 
                    href="/service/trim&gutters" 
                    className="navbar__item"
                    style={{
                        color:path === "/service/trim&gutters" ? 'red' : 'aliceblue'
                    }}
                >TRIM & GUTTERS</Link>
                <Link 
                    href="/service/windows&doors" 
                    className="navbar__item"
                    style={{
                        color:path === "/service/windows&doors" ? 'red' : 'aliceblue'
                    }}
                >WINDOWS & DOORS</Link>
                <Link 
                    href="/company-information/projects" 
                    className="navbar__item"
                    style={{
                        color:path === "/company-information/projects" ? 'red' : 'aliceblue'
                    }}
                >PROJECTS</Link> */}
                <Link 
                    href="/company-information/contact" 
                    className="navbar__item"
                    style={{
                        color:path === "/company-information/contact" ? 'red' : 'aliceblue'
                    }}
                >CONTACT US</Link>
            </div>
        </nav>
    )
}