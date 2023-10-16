import { NextPage } from "next";
import { Layout } from "@/layout/Layout";
import { BannerMainComponent } from '../../components/banner/BannerMainComponent';
import { InfoServiceComponent } from '../../components/servicePage/infoService/InfoServiceComponent';
import { FrequentlyAskedQuestions } from '../../components/frequentlyAskedQuestions/FrequentlyAskedQuestions';
import { MapComponent } from '../../components/mapComponent/MapComponent';


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

            <FrequentlyAskedQuestions />

            <div className="contactpage__container-maps">
                <MapComponent 
                    link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2920.50394187954!2d-78.6752466241575!3d42.94658359784584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d3756ea6d6a879%3A0x96b2cc8c77baa3ad!2sBesroi%20Roofing%20%26%20Siding!5e0!3m2!1ses-419!2sec!4v1697210901224!5m2!1ses-419!2sec"
                />
                <MapComponent 
                    link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1693.0700582831585!2d-77.65043992481291!3d43.17292240420796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d6b47698925d67%3A0x949393608d5e48e3!2s711%20Emerson%20St%2C%20Rochester%2C%20NY%2014613%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sec!4v1697211403166!5m2!1ses-419!2sec"
                />
            </div>
        </Layout>
    )
}

export default ContactPage;