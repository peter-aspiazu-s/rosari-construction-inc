import { NextPage } from "next";
import { Layout } from "@/layout/Layout";
import { BannerMainComponent } from '../../components/banner/BannerMainComponent';
import { InfoServiceComponent } from '../../components/servicePage/infoService/InfoServiceComponent';
import { AccordionComponent } from '../../components/accordion/AccordionComponent';
import { BrandsComponents } from '../../components/servicePage/brands/BransComponent';
import { CheckOurOtherServices } from '../../components/servicePage/checkOurOtherServices/CheckOurOtherServices';


const imageArray = [
    {
        img: '/images/siding-2.jpg',
        alt: 'windows & doors image slide'
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

const WindowsAndDoorsPage: NextPage = () => {
    return (
        <Layout
            title="Windows & Doors | Page"
            description="Windows & Doors page"
            keywords="Windows & Doors"
        >
            <BannerMainComponent image="/images/web_IMG_4634-1.jpg" imageTitle="Windows and Doors image" />

            <div className="servicepage__infoservicecomponent">
                <InfoServiceComponent 
                    title="WINDOWS & DOORS"
                    description="At Besroi Roofing & Siding, we can help you reduce your energy bill, increase your home’s value, and improve its appearance by installing replacement windows and doors. We expertly install windows and doors for both new construction and replacement projects."
                    bold={true}
                    accordion={false}
                />

                <InfoServiceComponent 
                    subtitle="DO YOU NEED TO REPLACE YOUR WINDOWS AND DOORS?"
                    description="Living in Western NY, you know weather isn’t always kind, especially during the winter months. Although windows and doors can last a long time, they don’t last forever. Here are a few ways to tell if you need to replace them."
                    bold={false}
                    imageArray={imageArray}
                    accordion={false}
                />

                <div className="servicepage__accordioncomponent">
                    <AccordionComponent 
                        title="Warped or Broken"
                        description="A pretty easy tell, but an important one. If you have trouble opening and closing your windows or doors,  your windows condensate or fog in between panes, or have a broken sash or frame, it’s time to start thinking about replacements."
                    />
                    <AccordionComponent 
                        title="You Want To Remodel"
                        description="If your windows and doors look worn, your house will look worn as well. Color fading or material warping are good signs that you need to replace them soon."
                    />
                    <AccordionComponent 
                        title="Surviving A Storm"
                        description="Western NY is no stranger to some severe weather. A new set of windows can decrease drafts and increase heat retention allowing you and your family to be warm and comfortable during our worst weather. Over time, the impact of these storms can wear down the effectiveness of your windows and doors."
                    />
                    <AccordionComponent 
                        title="Energy Efficiency"
                        description="If you want to reduce your energy bill, your windows and doors are a great start. Think about this: drafty windows and doors can increase your energy bill upwards of 25%, according to the Department of Energy. Ask us about our triple pane windows for optimal energy efficiency!"
                    />
                </div>
            </div>


            <BrandsComponents 
                title="Brands"
                description="We are certified installers in all asphalt shingle roofing products. We recommend a 50-Year Lifetime Warranty shingle that is transferable."
                images={imageBrands}
            />


            <CheckOurOtherServices 
                title="Check out our deck installation services!"
                subtitle="Add an outdoor living area to your home today!"
                textButton="Decks"
                link="/service/decks"
            />
        </Layout>
    )
}

export default WindowsAndDoorsPage;