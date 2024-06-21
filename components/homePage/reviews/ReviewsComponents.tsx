import { FC } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { Dancing_Script } from '@next/font/google';


const dacing_script = Dancing_Script({
    subsets: ['latin'],
    weight: ['400', '700']
})

export const ReviewsComponents: FC = () => {
    return (
        <div className="reviewcomponent">
            <div className="reviewcomponent__container">
                <div className="reviewcomponent__container-text">
                    <div className={`${dacing_script.className} reviewcomponent__container-text-title`}>Mission</div>
                    <div className="reviewcomponent__container-text-description">
                        Provide construction, repair or maintenance services for your home; 
                        Through the 
                        fulfillment of your needs with the highest standards of quality, safety, 
                        innovation 
                        and, above all, customer satisfaction.
                    </div>
                    <div className={`${dacing_script.className} reviewcomponent__container-text-title`}>Vision</div>
                    <div className="reviewcomponent__container-text-description">
                        Be recognized as the leading construction company in innovation,
                        sustainability and excellence nationwide, to improve the quality of life of 
                        our clients.
                    </div>
                    <div className="reviewcomponent__container-text-call">
                        <div className="reviewcomponent__container-text-calltoaction">Call Us Now for a Free Consultation!</div>
                        <a href="tel:+18455488278" className="reviewcomponent__container-text-button">Call Now!</a>
                    </div>
                </div>
            </div>
        </div>
    )
}