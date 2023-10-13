import { NextPage } from "next";
import { Layout } from "@/layout/Layout";
import { BannerMainComponent } from '../../components/banner/BannerMainComponent';
import { InfoServiceComponent } from '../../components/servicePage/infoService/InfoServiceComponent';
import { ThingService } from '../../components/servicePage/thingService/ThingService';


const imageArray = [
    {
        img: '/images/web2_deck2.jpg',
        alt: 'decks image slide'
    }
]

const DecksPage: NextPage = () => {
    return (
        <Layout
            title="Roofing | Page"
            description="Roofing page"
            keywords="roofing"
        >
            <BannerMainComponent image="/images/web_IMG_0063.jpg" imageTitle="Decks image" />

            <div className="servicepage__infoservicecomponent">
                <InfoServiceComponent 
                    title="DECKS"
                    description="At Besroi Roofing & Siding, we install beautiful decks to add that outdoor living area you want for your home. Not only is a deck great for hosting parties, get-togethers, and other events, but it also increases the value of your home! There’s nothing quite like enjoying time outside with family and friends during the warm months in Western NY. We have exclusive carpentry crews to install decks on all types of projects including new & existing homes and large-scale multi-family units."
                    bold={true}
                    imageArray={imageArray}
                    accordion={false}
                />
            </div>

            <ThingService />
        </Layout>
    )
}

export default DecksPage;