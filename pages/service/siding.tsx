import { NextPage } from "next";
import { Layout } from "@/layout/Layout";
import { BannerMainComponent } from '../../components/banner/BannerMainComponent';
import { InfoServiceComponent } from '../../components/servicePage/infoService/InfoServiceComponent';


const imageArray = [
    {
        img: '/images/web_siding.jpg',
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

const SidingPage: NextPage = () => {
    return (
        <Layout
            title="Roofing | Page"
            description="Roofing page"
            keywords="roofing"
        >
            <BannerMainComponent image="/images/web_IMG_4638-1.jpg" imageTitle="Siding image" />

            <div className="servicepage__infoservicecomponent">

                <InfoServiceComponent 
                    title="SIDING"
                    description="Keep your home buttoned up during the colder months with siding installed by the pros at Besroi Roofing & Siding. We have more than 50 years of siding experience in Western NY, and our professional staff is ready to enhance your home with a positive investment. If your siding or roof is damaged during a storm, we can repair it! We proudly back our work, as with any completion of a siding installation project on a residential home, we offer a five-year labor warranty, including transferable manufacturer’s warranties."
                    bold={true}
                    accordion={false}
                />

                <InfoServiceComponent 
                    title="PRODUCTS"
                    subtitle="HORIZONTAL SIDING"
                    description="A very popular choice, and with good reason. Horizontal siding, in clapboard or dutch lap designs, creates a traditional look, with many styles and colors to choose from. With moisture-resistant housewrap topped with vinyl siding, Besroi can give your house the curb appeal you desire at a competitive price. Ask us about our different tiers of vinyl siding and insulation backed siding."
                    bold={false}
                    imageArray={imageArray}
                    accordion={false}
                />
                
                <InfoServiceComponent 
                    subtitle="FAUX WOOD SHAKES"
                    description="Do you crave that distinctive rustic appearance for your home? Faux wood shingles could be the solution for you. Get the durability of fiber cement shingles with the look of cedar shingles all in one option. Shakes are sometimes used as a compliment to horizontal siding. Although they are more expensive than horizontal clap board, the unique curb appeal is worth it. Whole houses can be done with it as well."
                    bold={false}
                    imageArray={imageArray2}
                    accordion={false}
                />

                <InfoServiceComponent 
                    subtitle="BOARD-AND-BATTEN"
                    description="Because our region has cold winters and warm summers, board and batten siding is a great choice for siding. This time-tested technique is durable, easy to repair and allows for the natural expansion and contraction of the siding material. Board-and-batten is essentially vertical siding and very popular right now with accents."
                    bold={false}
                    imageArray={imageArray3}
                    accordion={false}
                />

                <InfoServiceComponent 
                    subtitle="FIBER CEMENT SIDING"
                    description="If you are searching for a natural look without the expense of natural materials, fiber cement siding is right for you. Once you install it, you most likely will never need to install it again as it can last up to 50 years! Besroi is a partner of James-Hardie and can offer you solutions if you’re interested in the look. It is a premium product in exterior siding and is also extremely labor intensive. The longevity, however, is superior to other products."
                    bold={false}
                    imageArray={imageArray4}
                    accordion={false}
                />
            </div>
        </Layout>
    )
}

export default SidingPage;