import { FC } from "react";
import { ServiceComponent } from './ServiceComponent';

export const SectionServiceContainer: FC = () => {
    return (
        <div className="sectionservicecontainer">
            <div className="sectionservicecontainer__container">
                <ServiceComponent 
                    title="Roofing"
                    description="Let’s protect and enhance your home with our expert roofing solutions!"
                    image="/images/web_shutterstock_676232578.jpg"
                    link="/service/roofing"
                    />
                <ServiceComponent 
                    title="Siding"
                    description="Let’s completely protect your home from the elements!"
                    image="/images/web_shutterstock_700859902.jpg"
                    link="/service/siding"
                    />
                <ServiceComponent 
                    title="Drywall"
                    description="Let’s strengthen and secure your structures with our expert welding solutions!
"
                    image="/images/drywall.jpg"
                    link="/service/drywall"
                />
                <ServiceComponent 
                    title="Welding"
                    description="Let’s strengthen and secure your structures with our expert welding solutions!
"
                    image="/images/welding.jpg"
                    link="/service/welding"
                />
            </div>
        </div>
    )
}