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
                        <p>Welcome to Rosari Construction, where we transform your vision into a reality through expert craftsmanship and exceptional service. Although we are a new name in the construction industry, our commitment to quality and excellence sets us apart.</p>
                        <p>We are committed to exceeding your expectations through every phase of your project. From initial consultation to final inspection, we work closely with you to ensure that your needs are met and your vision is realized. We respect your time by adhering to agreed deadlines and strive to make your experience as smooth and satisfying as possible.</p>
                    </div>
                    <div className="aboutcomponent__image">
                        <Image src="/images/siding.jpg" alt="About image" layout="fill" />
                    </div>
                </div>
            </div>
        </div>
    )
}