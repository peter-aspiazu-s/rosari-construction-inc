import { FC } from "react";
import Image from "next/image";
import { Dancing_Script } from '@next/font/google';


const dacing_script = Dancing_Script({
    subsets: ['latin'],
    weight: ['400', '700']
})

export const PartnersComponent: FC = () => {
    return (
        <div className="partnerscomponent">
            <div className="partnerscomponent__container">
                <div className="partnerscomponent__text">
                    <div className={`${dacing_script.className} partnerscomponent__title`}>Our Partners</div>
                    <hr />
                </div>

                <div className="partnerscomponent__image-container">
                    <div className="partnerscomponent__image">
                        <Image src="/images/atlas-logo.png" alt="atlas logo" layout="fill" />
                    </div>
                    <div className="partnerscomponent__image">
                        <Image src="/images/Owens_Corning_logo.svg_.png" alt="Owens logo" layout="fill" />
                    </div>
                    <div className="partnerscomponent__image">
                        <Image src="/images/CERTAIN.png" alt="Certain logo" layout="fill" />
                    </div>
                    <div className="partnerscomponent__image">
                        <Image src="/images/ALSIDE-768x193.png" alt="Alside logo" layout="fill" />
                    </div>
                    <div className="partnerscomponent__image">
                        <Image src="/images/logo_B.png" alt="Color Guard logo" layout="fill" />
                    </div>
                    <div className="partnerscomponent__image">
                        <Image src="/images/BNBA.png" alt="BNBA logo" layout="fill" />
                    </div>
                    <div className="partnerscomponent__image">
                        <Image src="/images/gaf-768x699.png" alt="GAF logo" layout="fill" />
                    </div>
                    <div className="partnerscomponent__image">
                        <Image src="/images/iko-logo-pop-up_logo-768x341.png" alt="IKO logo" layout="fill" />
                    </div>
                    <div className="partnerscomponent__image">
                        <Image src="/images/Velux_logo.svg_-768x266.png" alt="Velux logo" layout="fill" />
                    </div>
                    <div className="partnerscomponent__image">
                        <Image src="/images/wasco_skylights-1.png" alt="Wasco logo" layout="fill" />
                    </div>
                </div>
            </div>
        </div>
    )
}