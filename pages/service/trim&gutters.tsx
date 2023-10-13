import { NextPage } from "next";
import { Layout } from "@/layout/Layout";
import { BannerMainComponent } from '../../components/banner/BannerMainComponent';
import { InfoServiceComponent } from '../../components/servicePage/infoService/InfoServiceComponent';


const imageArray = [
    {
        img: '/images/web_gutter_cutter.jpg',
        alt: 'Trim & gutters image slide'
    }
]

const imageArray2 = [
    {
        img: '/images/web_IMG_4633.jpg',
        alt: 'Trim & gutters image slide'
    }
]

const TrimAndGuttersPage: NextPage = () => {
    return (
        <Layout
            title="Roofing | Page"
            description="Roofing page"
            keywords="roofing"
        >
            <BannerMainComponent image="/images/web_IMG_0163.jpg" imageTitle="Trim & Gutters image" />

            <div className="servicepage__infoservicecomponent">
                <InfoServiceComponent 
                    title="TRIM & GUTTERS"
                    description="You might not think much about your gutters, but leaky or a non-existent gutter system could be detrimental to your home, especially in Western NY. At Besroi Roofing & Siding, we install seamless gutter systems for our customers. Gutters have an unglamorous yet important job in properly redirecting rain runoff to protect your siding, windows, doors, and foundation from water damage. With a seamless gutter system, as the name implies, there are no seams for water to work its way into and damage your gutters, causing leaks."
                    bold={true}
                    imageArray={imageArray}
                    accordion={false}
                />
                <InfoServiceComponent 
                    title="WHAT MAKES BESROI DIFFERENT?"
                    description="While we are known for our top-quality roofing & siding, we are proud to offer seamless gutters. We are able to fabricate seamless gutters right on site, and our factory-trained team ensures your complete satisfaction with your gutter installation project!"
                    bold={true}
                    imageArray={imageArray2}
                    accordion={true}
                />
            </div>
        </Layout>
    )
}

export default TrimAndGuttersPage;