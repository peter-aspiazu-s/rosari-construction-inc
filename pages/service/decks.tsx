import { NextPage } from "next";
import { Layout } from "@/layout/Layout";
import { BannerMainComponent } from '../../components/banner/BannerMainComponent';
import { InfoServiceComponent } from '../../components/servicePage/infoService/InfoServiceComponent';
import { ThingService } from '../../components/servicePage/thingService/ThingService';
import { BrandsComponents } from '../../components/servicePage/brands/BransComponent';
import { CheckOurOtherServices } from '../../components/servicePage/checkOurOtherServices/CheckOurOtherServices';
import { PaginationComponent } from '../../components/pagination/PaginationComponent';


const imageArray = [
    {
        img: '/images/web2_deck2.jpg',
        alt: 'decks image slide'
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


const imagesArr = [
    {
        img: '/images/web_IMG951678.jpg',
        alt: 'Project image'
    },
    {
        img: '/images/web_IMG951677.jpg',
        alt: 'Project image'
    },
    {
        img: '/images/web_IMG_1612.jpg',
        alt: 'Project image'
    },
    {
        img: '/images/web_IMG_1611.jpg',
        alt: 'Project image'
    },
    {
        img: '/images/web_IMG_1616.jpg',
        alt: 'Project image'
    },
    {
        img: '/images/web_IMG_1613.jpg',
        alt: 'Project image'
    },
    {
        img: '/images/web_IMG_1614.jpg',
        alt: 'Project image'
    },
    {
        img: '/images/web_IMG_1615.jpg',
        alt: 'Project image'
    },
    {
        img: '/images/web_IMG_1610.jpg',
        alt: 'Project image'
    },
    {
        img: '/images/web_IMG_0358.jpg',
        alt: 'Project image'
    },
    {
        img: '/images/web_IMG_0357.jpg',
        alt: 'Project image'
    },
    {
        img: '/images/web_IMG_0356.jpg',
        alt: 'Project image'
    },
    {
        img: '/images/web_IMG_0355.jpg',
        alt: 'Project image'
    },
    {
        img: '/images/web_IMG_0352.jpg',
        alt: 'Project image'
    },
    {
        img: '/images/web_IMG_0351.jpg',
        alt: 'Project image'
    },
    {
        img: '/images/web_deck2.jpg',
        alt: 'Project image'
    }
]

const DecksPage: NextPage = () => {
    return (
        <Layout
            title="Decks | Page"
            description="Decks page"
            keywords="decks"
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

            <BrandsComponents 
                title="Materials We Use"
                description="We are an exclusive provider of RPI Lumber for our deck builds and offer Color Guard railings as well. Why do we use this product in particular? The material is a high-density polyethylene recycled plastic that doesn’t contain any wood fillers. This is not only an environmentally friendly alternative to lumber, but it’s also long-lasting and 100% maintenance-free."
            />

            <PaginationComponent 
                images={imagesArr}
                itemsPerPage={4}
                backgroundColorPagination="#eaeaea"
            />

            <CheckOurOtherServices 
                title="Check out our Trim & Gutters services too!"
                subtitle="Button up your home and keep it dry today!"
                textButton="Trim & Gutters"
                link="/service/trim&gutters"
            />
        </Layout>
    )
}

export default DecksPage;