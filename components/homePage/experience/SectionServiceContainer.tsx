import { FC } from "react";
import { ServiceComponent } from './ServiceComponent';

export const SectionServiceContainer: FC = () => {
    return (
        <div className="sectionservicecontainer">
            <div className="sectionservicecontainer__container">
                <ServiceComponent 
                    title="Roofing"
                    description="Protect your most significant investment with a beautiful, long-lasting roof installed by us! Click for more information."
                    image="/images/web_shutterstock_676232578.jpg"
                    link="/service/roofing"
                    />
                <ServiceComponent 
                    title="Siding"
                    description="From traditional horizontal siding to faux wood shakes and more, we back all our siding work. Click for more details."
                    image="/images/web_shutterstock_700859902.jpg"
                    link="/service/siding"
                    />
                <ServiceComponent 
                    title="Decks"
                    description="Add some outdoor living space to your home today with a brand-new deck. Click for more information & free estimate."
                    image="/images/web_shutterstock_374922070.jpg"
                    link="/service/decks"
                />
            </div>
        </div>
    )
}