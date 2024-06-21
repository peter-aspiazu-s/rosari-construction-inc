import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export const MenuFooter: FC = () => {

    const router = useRouter();

    const path = router.asPath;

    return (
        <div className="menufooter">
            <div className="menufooter__container">
                <Link 
                    href="/" 
                    className="menufooter__item"
                    style={{
                        color:path === "/" ? 'red' : '#c0c0c0'
                    }}
                >HOME</Link>
                <Link 
                    href="/service/roofing" 
                    className="menufooter__item"
                    style={{
                        color:path === "/service/roofing" ? 'red' : '#c0c0c0'
                    }}
                >ROOFING</Link>
                <Link 
                    href="/service/siding" 
                    className="menufooter__item"
                    style={{
                        color:path === "/service/siding" ? 'red' : '#c0c0c0'
                    }}
                >SIDING</Link>
                {/* <Link 
                    href="/service/decks" 
                    className="menufooter__item"
                    style={{
                        color:path === "/service/decks" ? 'red' : '#c0c0c0'
                    }}
                >DECKS</Link>
                <Link 
                    href="/service/trim&gutters" 
                    className="menufooter__item"
                    style={{
                        color:path === "/service/trim&gutters" ? 'red' : '#c0c0c0'
                    }}
                >TRIM & GUTTERS</Link>
                <Link 
                    href="/service/windows&doors" 
                    className="menufooter__item"
                    style={{
                        color:path === "/service/windows&doors" ? 'red' : '#c0c0c0'
                    }}
                >WINDOWS & DOORS</Link> */}
                <Link 
                    href="/company-information/projects" 
                    className="menufooter__item"
                    style={{
                        color:path === "/company-information/projects" ? 'red' : '#c0c0c0'
                    }}
                >PROJECTS</Link>
                <Link 
                    href="/company-information/contact" 
                    className="menufooter__item"
                    style={{
                        color:path === "/company-information/contact" ? 'red' : '#c0c0c0'
                    }}
                >CONTACT US</Link>
            </div>
        </div>
    )
}