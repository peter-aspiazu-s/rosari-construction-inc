import { NextPage } from "next";
import { Layout } from "@/layout/Layout";
import { BannerMainComponent } from '../../components/banner/BannerMainComponent';
import { InfoServiceComponent } from '../../components/servicePage/infoService/InfoServiceComponent';


const imageArray = [
    {
        img: '/images/web_IMG_4637.jpg',
        alt: 'contact image slide'
    }
]

const ContactPage: NextPage = () => {
    return (
        <Layout
            title="Roofing | Page"
            description="Roofing page"
            keywords="roofing"
        >
            <BannerMainComponent image="/images/web_IMG_2117.jpg" imageTitle="Contact image" />

            <div className="servicepage__infoservicecomponent">
                <InfoServiceComponent 
                    title="CONTACT US"
                    description="Our team at Besroi Roofing & Siding works all year round to installing roofs, siding, decks, gutters, windows, and doors for our neighbors in Lancaster, NY and the surrounding communities. We don’t go south when the weather does. We are certified installers for major roof manufacturers including, GAF, CertainTeed, and Owens Corning. Add value and decrease your energy costs today with products installed by our experienced and knowledgeable team."
                    bold={true}
                    imageArray={imageArray}
                    accordion={false}
                />
            </div>
        </Layout>
    )
}

export default ContactPage;