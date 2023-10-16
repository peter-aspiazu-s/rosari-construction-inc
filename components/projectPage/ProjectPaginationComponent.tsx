import { FC } from "react";
import { PaginationComponent } from '../pagination/PaginationComponent';


const imagesArr = [
    {
        img: '/images/DJI_0275-scaled.jpg',
        alt: 'Project image'
    },
    {
        img: '/images/DJI_0299-scaled.jpg',
        alt: 'Project image'
    },
    {
        img: '/images/DJI_0294-scaled.jpg',
        alt: 'Project image'
    },
    {
        img: '/images/DJI_0281-scaled.jpg',
        alt: 'Project image'
    },
    {
        img: '/images/DJI_0301-scaled.jpg',
        alt: 'Project image'
    },
    {
        img: '/images/DJI_0292-scaled.jpg',
        alt: 'Project image'
    },
    {
        img: '/images/DJI_0273-scaled.jpg',
        alt: 'Project image'
    },
    {
        img: '/images/DJI_0282-scaled.jpg',
        alt: 'Project image'
    },
    {
        img: '/images/DJI_0298-scaled.jpg',
        alt: 'Project image'
    },
]

export const ProjectPaginationComponent: FC = () => {
    return (
        <div className="projectpaginationcomponent">
            <div className="projectpaginationcomponent__container">
                <div className="projectpaginationcomponent__title">RESPONSE TO LOVE CENTER</div>
                <div className='projectscomponent__line'></div>
                <div className="projectpaginationcomponent__text"><strong>Roofing</strong> – 20,000 sq ft of roofing installed</div>
                <div className="projectpaginationcomponent__text">Product Owens Corning duration</div>
                <div className='projectscomponent__line'></div>
            </div>
            <PaginationComponent
                images={imagesArr}
                itemsPerPage={4}
            />
        </div>
    )
}