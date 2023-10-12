import { NextPage } from "next";
import { Layout } from '../layout/Layout';
import { BannerMainComponent } from '../components/banner/BannerMainComponent';
import { ExperienceComponent } from '../components/homePage/experience/Experiencie';
import { SectionServiceContainer } from '../components/homePage/experience/SectionServiceContainer';
import { ReviewsComponents } from '../components/homePage/reviews/ReviewsComponents';


const HomePage: NextPage = () => {
  return (
    <Layout
      title="Hola"
      description="Hola mundo"
      keywords="Hola, mundo"
    >
      <BannerMainComponent image="/images/banner-main-img1.jpg" imageTitle="Imagen de casa grande" />

      <ExperienceComponent />

      <SectionServiceContainer />

      <ReviewsComponents />
    
    </Layout>
  )
}


export default HomePage;