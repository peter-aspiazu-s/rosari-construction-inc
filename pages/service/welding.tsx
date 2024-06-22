import { NextPage } from "next";
import { Layout } from "@/layout/Layout";
import { BannerMainComponent } from '../../components/banner/BannerMainComponent';
import { InfoServiceComponent } from '../../components/servicePage/infoService/InfoServiceComponent';
import { BrandsComponents } from '../../components/servicePage/brands/BransComponent';
import { CheckOurOtherServices } from '../../components/servicePage/checkOurOtherServices/CheckOurOtherServices';
import { PaginationComponent } from '../../components/pagination/PaginationComponent';


const imageArray = [
    {
        img: '/images/welding.jpg',
        alt: 'siding image slide'
    }
]

const imageArray2 = [
    {
        img: '/images/web_shaker.jpg',
        alt: 'siding image slide'
    },
    {
        img: '/images/web_shake_siding2.jpg',
        alt: 'siding image slide'
    }
]

const imageArray3 = [
    {
        img: '/images/web_board_batten.jpg',
        alt: 'siding image slide'
    },
    {
        img: '/images/shutterstock_1197371209.jpg',
        alt: 'siding image slide'
    }
]

const imageArray4 = [
    {
        img: '/images/web_cement.jpg',
        alt: 'siding image slide'
    },
    {
        img: '/images/shutterstock_737220655.jpg',
        alt: 'siding image slide'
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
        img: '/images/web_IMG_1116.jpg',
        alt: 'Project image'
    },
    {
        img: '/images/web_IMG_1454.jpg',
        alt: 'Project image'
    },
    {
        img: '/images/web_IMG_1737.jpg',
        alt: 'Project image'
    },
    {
        img: '/images/web_IMG_1533.jpg',
        alt: 'Project image'
    },
    {
        img: '/images/web_IMG_2084.jpg',
        alt: 'Project image'
    },
    {
        img: '/images/web_IMG_2117.jpg',
        alt: 'Project image'
    },
    {
        img: '/images/web_IMG_1825.jpg',
        alt: 'Project image'
    },
    {
        img: '/images/web_IMG_0272.jpg',
        alt: 'Project image'
    },
    {
        img: '/images/web_IMG_0271.jpg',
        alt: 'Project image'
    },
    {
        img: '/images/web_IMG_4688.jpg',
        alt: 'Project image'
    },
    {
        img: '/images/web_IMG_4687.jpg',
        alt: 'Project image'
    },
    {
        img: '/images/web_IMG_4639.jpg',
        alt: 'Project image'
    },
    {
        img: '/images/web_IMG_4638.jpg',
        alt: 'Project image'
    }
]

const WeldingPage: NextPage = () => {
    return (
        <Layout
            title="Welding | Page"
            description="Welding page"
            keywords="welding"
        >
            <BannerMainComponent image="/images/welding.jpg" imageTitle="Welding image" />

            <div className="servicepage__infoservicecomponent">

                <InfoServiceComponent 
                    title="WELDING"
                    description="Are you looking for information on types of welding, costs, and installation options for your structures?"
                    bold={true}
                    imageArray={imageArray}
                    accordion={false}
                />

                {/* <InfoServiceComponent 
                    title="PRODUCTS"
                    subtitle="HORIZONTAL SIDING"
                    description="A very popular choice, and with good reason. Horizontal siding, in clapboard or dutch lap designs, creates a traditional look, with many styles and colors to choose from. With moisture-resistant housewrap topped with vinyl siding, Besroi can give your house the curb appeal you desire at a competitive price. Ask us about our different tiers of vinyl siding and insulation backed siding."
                    bold={false}
                    imageArray={imageArray}
                    accordion={false}
                /> */}
                
                {/* <InfoServiceComponent 
                    subtitle="FAUX WOOD SHAKES"
                    description="Do you crave that distinctive rustic appearance for your home? Faux wood shingles could be the solution for you. Get the durability of fiber cement shingles with the look of cedar shingles all in one option. Shakes are sometimes used as a compliment to horizontal siding. Although they are more expensive than horizontal clap board, the unique curb appeal is worth it. Whole houses can be done with it as well."
                    bold={false}
                    imageArray={imageArray2}
                    accordion={false}
                /> */}

                {/* <InfoServiceComponent 
                    subtitle="BOARD-AND-BATTEN"
                    description="Because our region has cold winters and warm summers, board and batten siding is a great choice for siding. This time-tested technique is durable, easy to repair and allows for the natural expansion and contraction of the siding material. Board-and-batten is essentially vertical siding and very popular right now with accents."
                    bold={false}
                    imageArray={imageArray3}
                    accordion={false}
                /> */}

                {/* <InfoServiceComponent 
                    subtitle="FIBER CEMENT SIDING"
                    description="If you are searching for a natural look without the expense of natural materials, fiber cement siding is right for you. Once you install it, you most likely will never need to install it again as it can last up to 50 years! Besroi is a partner of James-Hardie and can offer you solutions if you’re interested in the look. It is a premium product in exterior siding and is also extremely labor intensive. The longevity, however, is superior to other products."
                    bold={false}
                    imageArray={imageArray4}
                    accordion={false}
                /> */}
            </div>


            {/* <BrandsComponents 
                title="Brands"
                description="We are certified installers in all asphalt shingle roofing products. We recommend a 50-Year Lifetime Warranty shingle that is transferable."
                images={imageBrands}
            /> */}

            {/* <PaginationComponent 
                images={imagesArr}
                itemsPerPage={4}
                backgroundColorPagination="#eaeaea"
            /> */}

            <CheckOurOtherServices 
                title="Check out our roofing services too!"
                subtitle="Let’s protect and enhance your home with our expert roofing solutions!"
                textButton="Roofing"
                link="/service/Roofing"
            />
        </Layout>
    )
}

export default WeldingPage;