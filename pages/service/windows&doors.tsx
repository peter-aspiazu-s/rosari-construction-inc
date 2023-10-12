import { NextPage } from "next";
import { Layout } from "@/layout/Layout";
import { BannerMainComponent } from '../../components/banner/BannerMainComponent';

const WindowsAndDoorsPage: NextPage = () => {
    return (
        <Layout
            title="Roofing | Page"
            description="Roofing page"
            keywords="roofing"
        >
            <BannerMainComponent image="/images/web_IMG_4634-1.jpg" imageTitle="Windows and Doors image" />
        </Layout>
    )
}

export default WindowsAndDoorsPage;