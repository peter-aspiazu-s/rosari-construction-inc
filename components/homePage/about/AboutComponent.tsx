import { FC } from "react";
import Image from "next/image";

export const AboutComponent: FC = () => {
    return (
        <div className="aboutcomponent">
            <div className="aboutcomponent__container">
                <div className="aboutcomponent__title">
                    ABOUT US
                </div>

                <div className="aboutcomponent__text-img">
                    <div className="aboutcomponent__description">
                        <p>We were founded on November 21st, 1960 by our patriarch, Richard Kaminski, and others. Originally the company was formed to service the new home construction industry. After a couple of years, the company began offering their services to individual homeowners.</p>
                        <p>When combined, our staff possesses over two centuries of roofing and siding experience. Some started working for Besroi in their late teens and are still here over 30 to 40 years later. All staff members are tested and certified by individual roof manufacturers in the installation of their products. Training is constant in the use and application of new products, tools, and safety.</p>
                        <p>Our sales staff is made up of employees who have transitioned from working in the field. They know what products will work best on your home. Our office is made up of family who has grown up in the business and is well versed in all aspects of the industry.</p>
                    </div>
                    <div className="aboutcomponent__image">
                        <Image src="/images/header-768x512.jpg" alt="About image" layout="fill" />
                    </div>
                </div>
            </div>
        </div>
    )
}