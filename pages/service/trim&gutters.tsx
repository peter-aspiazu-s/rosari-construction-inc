import { NextPage } from "next";
import { Layout } from "@/layout/Layout";
import { BannerMainComponent } from '../../components/banner/BannerMainComponent';

const TrimAndGuttersPage: NextPage = () => {
    return (
        <Layout
            title="Roofing | Page"
            description="Roofing page"
            keywords="roofing"
        >
            <BannerMainComponent image="/images/web_IMG_0163.jpg" imageTitle="Trim & Gutters image" />
        </Layout>
    )
}

export default TrimAndGuttersPage;