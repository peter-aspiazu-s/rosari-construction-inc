import { NextPage } from "next";
import { Layout } from "@/layout/Layout";
import { BannerMainComponent } from '../../components/banner/BannerMainComponent';
import { InfoServiceComponent } from '../../components/servicePage/infoService/InfoServiceComponent';

const ProjectsPage: NextPage = () => {
    return (
        <Layout
            title="Roofing | Page"
            description="Roofing page"
            keywords="roofing"
        >
            <BannerMainComponent image="/images/web2_IMG_4620.jpg" imageTitle="Projects image" />

            <div className="servicepage__infoservicecomponent">
                <InfoServiceComponent 
                    title="PROJECTS"
                    description="Whether it’s a commercial or residential construction project, Besroi Roofing & Siding has you covered. We’ve helped our neighbors throughout Western NY with all of their roofing, siding, deck, window, door, and gutter installation and repair needs and believe no job is too large or too small. Our dedicated team is committed to ensuring complete satisfaction with any home improvement or business renovation project. We want to give you peace of mind that your home or business is protected from the elements while also increasing its value. Below are some of the projects we’ve completed:"
                    bold={true}
                    accordion={false}
                />
            </div>
        </Layout>
    )
}

export default ProjectsPage;