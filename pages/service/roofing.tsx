import { NextPage } from "next";
import { Layout } from "@/layout/Layout";
import { BannerMainComponent } from '../../components/banner/BannerMainComponent';
import { InfoServiceComponent } from '../../components/servicePage/infoService/InfoServiceComponent';
import { BrandsComponents } from '../../components/servicePage/brands/BransComponent';
import { CheckOurOtherServices } from '../../components/servicePage/checkOurOtherServices/CheckOurOtherServices';


const imageArray = [
    {
        img: '/images/web_roofing.jpg',
        alt: 'roofing image slide'
    },
    {
        img: '/images/web_roofing_2.jpg',
        alt: 'roofing image slide'
    },
]

const imageArray2 = [
    {
        img: '/images/web_shutterstock_255295291.jpg',
        alt: 'roofing image slide'
    }
]

const imageArray3 = [
    {
        img: '/images/web_shutterstock_740953777.jpg',
        alt: 'roofing image slide'
    }
]

const imageArray4 = [
    {
        img: '/images/web_shutterstock_1088250299.jpg',
        alt: 'roofing image slide'
    }
]


const imageBrands = [
    {
        img: '/images/atlas-logo.png',
        alt: 'Atlas logo'
    },
    {
        img: '/images/Owens_Corning_logo.svg_.png',
        alt: 'Owens logo'
    },
    {
        img: '/images/CT-768x141.png',
        alt: 'Certain logo'
    },
    {
        img: '/images/gaf-768x699.png',
        alt: 'GAF logo'
    }
]

const RoofingPage: NextPage = () => {
    return (
        <Layout
            title="Roofing | Page"
            description="Roofing page"
            keywords="roofing"
        >
            <BannerMainComponent image="/images/web_roofing_header.jpg" imageTitle="Roofing image" />

            <div className="servicepage__infoservicecomponent">

                <InfoServiceComponent 
                    title="ROOFING"
                    description="Over time, like most things in your home, a roof will need replacing. There are many reasons for this, but at Besroi Roofing & Siding we’ve got you covered. Our region here in Western NY is notorious for lake effect snow and high winds, both of which can damage a roof of inferior quality. If your roof is leaking, has damaged or missing shingles, or if a storm has damaged your roof, we have the experience and knowledge to repair an existing roof or install a new one for you"
                    bold={true}
                    imageArray={imageArray}
                    accordion={false}
                />

                <InfoServiceComponent 
                    title="PRODUCTS"
                    subtitle="ARCHITECTURAL SHINGLES"
                    description="For individuals who want more durability, along with a 3-dimensional look to their roof, architectural shingles are the way to go. They are rated to 110 mph – 130 mph winds and are resistant to algae. We also offer a 50-year limited lifetime warranty on your roof — ask us about it!"
                    bold={false}
                    imageArray={imageArray2}
                    accordion={false}
                />
                
                <InfoServiceComponent 
                    subtitle="ROLL ROOFING"
                    description="For homes with a flat roof, roll roofing is an option. We also offer low-slope roof solutions as well. There are many types of roll roofing including, EPDM, TPO, and bitumen. These roofs generally last about 10-20 years depending on weather conditions and exposure to the elements."
                    bold={false}
                    imageArray={imageArray3}
                    accordion={false}
                />

                <InfoServiceComponent 
                    subtitle="DecTec® PVC Walk-on Roof Membrane"
                    description="Have a balcony or other living space open to the elements? DecTec® is the perfect solution for you. Besroi has completely many residential and commercial projects in DecTec. We are a proud affiliate of DecTec and we’re confident with their products and support."
                    bold={false}
                    imageArray={imageArray4}
                    accordion={false}
                />
            </div>

            <BrandsComponents 
                title="Brands"
                description="We are certified installers in all asphalt shingle roofing products. We recommend a 50-Year Lifetime Warranty shingle that is transferable."
                images={imageBrands}
            />

            <CheckOurOtherServices 
                title="Check out our siding services too."
                subtitle="Let’s completely protect your home from the elements!"
                textButton="Siding"
                link="/service/siding"
            />
        </Layout>
    )
}

export default RoofingPage;