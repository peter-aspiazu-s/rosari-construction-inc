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
            title="Contact | Page"
            description="Contact page"
            keywords="contact"
        >
            <BannerMainComponent image="/images/web_IMG_2117.jpg" imageTitle="Contact image" />

            <div className="servicepage__infoservicecomponent">
                <InfoServiceComponent 
                    title="CONTACT US"
                    description="If you are seeking a construction partner who values quality and client satisfaction, look no further. Contact Rosari Construction today to discuss how we can help turn your home into the space you’ve always dreamed of. We are excited to embark on this journey with you and deliver results that you will love."
                    bold={true}
                    imageArray={imageArray}
                    accordion={false}
                />
            </div>

            <FrequentlyAskedQuestions />

            <div className="contactpage__container-maps">
                <MapComponent 
                    link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2920.2165110750725!2d-78.90447069999999!3d42.9526416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d36cc81583874b%3A0x3e5e7841a00b03d1!2s132%20Royal%20Ave%2C%20Buffalo%2C%20NY%2014207%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sec!4v1719015495358!5m2!1ses-419!2sec"
                />
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2920.2165110750725!2d-78.90447069999999!3d42.9526416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d36cc81583874b%3A0x3e5e7841a00b03d1!2s132%20Royal%20Ave%2C%20Buffalo%2C%20NY%2014207%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sec!4v1719015495358!5m2!1ses-419!2sec" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                {/* <MapComponent 
                    link="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1693.0700582831585!2d-77.65043992481291!3d43.17292240420796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d6b47698925d67%3A0x949393608d5e48e3!2s711%20Emerson%20St%2C%20Rochester%2C%20NY%2014613%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sec!4v1697211403166!5m2!1ses-419!2sec"
                /> */}
            </div>
        </Layout>
    )
}

export default ContactPage;