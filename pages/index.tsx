import { NextPage, GetServerSideProps } from "next";
import { Layout } from '../layout/Layout';
import { BannerMainComponent } from '../components/banner/BannerMainComponent';
import { ExperienceComponent } from '../components/homePage/experience/Experiencie';
import { SectionServiceContainer } from '../components/homePage/experience/SectionServiceContainer';
import { ReviewsComponents } from '../components/homePage/reviews/ReviewsComponents';
import { AboutComponent } from '../components/homePage/about/AboutComponent';
import { PartnersComponent } from '../components/homePage/partners/PartnersComponent';
import { RecommendationVideo } from '../components/homePage/recommendationVideo/RecommendationVideo';
import { SlideRecommendationVideo } from '../components/homePage/slideRecommendationVideo/SlideRecommendationVideo';
import { useState } from "react";
import { MostVisited } from '../components/mostVisited/MostVisited';
import fetchSurveyResults from './api/survey/fetchSurveyResults';
import { InitialResults } from '../interface/interface';


const imgArr = [
  {
    img: '/images/recommendation-video-img1.png',
    alt: 'video image',
    link: 'https://vid.hellonetcdn.com/rt/90249/irt5c2e087120df11.51720233_univ.mp4'
  },
  {
    img: '/images/recommendation-video-img2.png',
    alt: 'video image',
    link: 'https://vid.hellonetcdn.com/rt/90249/irt5c2e0869799b75.83229467_univ.mp4'
  },
  {
    img: '/images/recommendation-video-img3.png',
    alt: 'video image',
    link: 'https://vid.hellonetcdn.com/rt/90249/irt5c2e08789cc9b0.27583965_univ.mp4'
  },
  {
    img: '/images/recommendation-video-img4.png',
    alt: 'video image',
    link: 'https://vid.hellonetcdn.com/rt/90249/irt5d78f647f31894.97299228_univ.mp4'
  },
  {
    img: '/images/recommendation-video-img5.png',
    alt: 'video image',
    link: 'https://vid.hellonetcdn.com/rt/90249/irt5d78f763ac5909.70225321_univ.mp4'
  },
]


// const HomePage: NextPage<{initialResults: InitialResults}> = () => {
const HomePage: NextPage<{initialResults: InitialResults}> = ({initialResults}) => {

  const [
    linkRecommendationVideo, 
    setLinkRecommendationVideo
  ] = useState('https://vid.hellonetcdn.com/rt/90249/irt5c2e087120df11.51720233_univ.mp4');

  return (
    <Layout
      title="Rosari Construction"
      description="Rosari Construction web page"
      keywords="Rosari Construction, roofing, siding, decks, windows and doors, trim and gutters"
    >
      <BannerMainComponent image="/images/banner-main-img1.jpg" imageTitle="Imagen de casa grande" />

      <ExperienceComponent />

      <SectionServiceContainer />

      <ReviewsComponents />

      {/* <RecommendationVideo 
        key={linkRecommendationVideo}
        linkVideo={linkRecommendationVideo} 
      /> */}

      {/* <div className="homepage__videoreview">
        <div className="homepage__videoreview-container">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M320-520q17 0 28.5-11.5T360-560q0-17-11.5-28.5T320-600q-17 0-28.5 11.5T280-560q0 17 11.5 28.5T320-520Zm160 0q17 0 28.5-11.5T520-560q0-17-11.5-28.5T480-600q-17 0-28.5 11.5T440-560q0 17 11.5 28.5T480-520Zm160 0q17 0 28.5-11.5T680-560q0-17-11.5-28.5T640-600q-17 0-28.5 11.5T600-560q0 17 11.5 28.5T640-520ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/></svg>
          <div className="homepage__videoreview__text">Scroll Through Video Reviews</div>
        </div>
      </div>

      <SlideRecommendationVideo 
        imgArr={imgArr} 
        setRecommendationVideoHome={setLinkRecommendationVideo}  
      /> */}

      <AboutComponent />

      {/* <MostVisited initialResults={initialResults} /> */}

      {/* <PartnersComponent /> */}
    
    </Layout>
  )
}


export const getServerSideProps: GetServerSideProps = async({req, res}) => {

  const results = await fetchSurveyResults();

  return {
    props: {
      initialResults: results ? results : [],
    },
  };
}

export default HomePage;