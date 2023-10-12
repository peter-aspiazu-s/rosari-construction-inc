import { FC } from "react";
import Link from "next/link";

export const ExperienceComponent: FC = () => {
    return(
        <div className="experience">
            <div className="experience__container">
                <div className="experience__title"><strong>Three Generations</strong> of Roofing & Siding Experience!</div>
                
                <div className="experience__text">
                    <div className="experience__text-paragraph1">
                        A top-quality build comes down to three things: experience, superior-grade materials, and craftsmanship with an eye for detail. At Besroi Roofing & Siding we embody those aspects to deliver the best construction services throughout Western, NY. 
                        Since 1960, we have been family-owned and operated, tailoring our services including <Link className="experience__text-paragraph-link" href="/service/roofing">roofing</Link>, <Link className="experience__text-paragraph-link" href="/service/siding">siding</Link>, <Link className="experience__text-paragraph-link" href="/service/gutter">gutter</Link>, <Link className="experience__text-paragraph-link" href="/service/window&door">window and door</Link> installations 
                        and repairs to homeowners. We help our neighbors by price matching and comparing costs for any of the products that we use. Bottom line our buying power allows us to deliver great services using the best products at fair prices.
                    </div>
                    <div className="experience__text-paragraph2">
                        We are proud to be one of the leading home improvement companies in the area as evidenced by winning the 2017 Associate of the Year award presented by the Buffalo Niagara Builders Association.
                    </div>
                </div>
                
                <div className="experience__video">
                    <video controls>
                        <source 
                            src="https://vid.hellonetcdn.com/vid/ny/constructionexchangebuffalowny/biz/nycoexnybu_04_rev_iwd_xtlrg_univ.mp4?e38743f7653b283e6b462af35b4bd035984c93fa9543d8ab36e0645ba1d6286afd6ac75c33887de5f5ca5ce10a794e2d170f" 
                            type="video/mp4" 
                        />
                        Tu navegador no soporta la reproducción de videos.
                    </video>
                </div>
            </div>
        </div>
    )
}