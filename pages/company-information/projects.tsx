import { useState } from "react";
import { NextPage } from "next";
import { Layout } from "@/layout/Layout";
import { BannerMainComponent } from '../../components/banner/BannerMainComponent';
import { InfoServiceComponent } from '../../components/servicePage/infoService/InfoServiceComponent';
import { ProjectsComponent } from '../../components/projectPage/projectsComponent';
import { PaginationComponent } from '../../components/pagination/PaginationComponent';
import { OtherProjects } from '../../components/projectPage/OtherProjects';
import { ProjectPaginationComponent } from '../../components/projectPage/ProjectPaginationComponent';



const listItem = [
    {
        title: 'Roofing',
        description: '203,000 sq ft installed',
        bold: true
    },
    {
        title: 'Siding',
        description: '77,900 sq ft installed',
        bold: true
    },
    {
        title: 'Gutters',
        description: '35,739 ft installed',
        bold: true
    }
]

const listItem2 = [
    {
        title: 'Siding',
        description: '250,000 sq ft installed',
        bold: true
    },
    {
        title: 'Trim',
        bold: true
    },
    {
        title: 'Deck',
        bold: true
    }
]

const listItem3 = [
    {
        title: 'Horse Barn',
        bold: true
    },
    {
        title: 'Roofing',
        description: '680,000 sq ft',
        bold: true
    },
    {
        title: 'Trim',
        bold: true
    }
]

const listItem4 = [
    {
        title: 'Gutters',
        description: '9,400 ft installed',
        bold: true
    }
]

const listItem5 = [
    {
        title: 'Removed & replaced',
        bold: false
    },
    {
        title: 'Windows',
        description: '820',
        bold: true
    },
    {
        title: 'Patio Doors',
        description: '146',
        bold: true
    },
    {
        title: 'Siding',
        description: '101,000 sq ft',
        bold: true
    }
]

const listItem6 = [
    {
        title: 'Roofing',
        description: '39,000 sq ft',
        bold: true
    },
    {
        title: 'Siding',
        description: '35,700 sq ft',
        bold: true
    },
    {
        title: 'Gutters',
        description: '800 ft',
        bold: true
    },
    {
        title: 'Decks',
        description: '2,028 sq ft of RPI decking',
        bold: true
    },
    {
        title: 'Railings',
        description: '520 ft',
        bold: true
    }
]

const imagesArr = [
    {
        img: '/images/web_IMG_4637.jpg',
        alt: 'Project image'
    },
    {
        img: '/images/web_IMG_4633.jpg',
        alt: 'Project image'
    },
    {
        img: '/images/web_IMG_4634-1.jpg',
        alt: 'Project image'
    },
    {
        img: '/images/web_IMG_4632.jpg',
        alt: 'Project image'
    },
    {
        img: '/images/web_IMG_4630.jpg',
        alt: 'Project image'
    },
    {
        img: '/images/web_IMG_4635.jpg',
        alt: 'Project image'
    },
    {
        img: '/images/web_IMG_4629.jpg',
        alt: 'Project image'
    },
    {
        img: '/images/web_IMG_4628.jpg',
        alt: 'Project image'
    },
    {
        img: '/images/web_IMG_4626.jpg',
        alt: 'Project image'
    },
    {
        img: '/images/web_IMG_4622.jpg',
        alt: 'Project image'
    },
    {
        img: '/images/web_IMG_4620.jpg',
        alt: 'Project image'
    },
    {
        img: '/images/web_IMG_4618.jpg',
        alt: 'Project image'
    },
    {
        img: '/images/web_IMG_4633.jpg',
        alt: 'Project image'
    },
]

const ProjectsPage: NextPage = () => {
    return (
        <Layout
            title="Projects | Page"
            description="Projects page"
            keywords="roofing, siding, window and doors, trim and gutters, decks"
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

            <div className="projectspage">
                <div className="projectspage__container">
                    <ProjectsComponent 
                        title="THE FAIRWAYS"
                        listItem={listItem}
                    />
                    <ProjectsComponent 
                        title="FOX CREEK"
                        listItem={listItem2}
                    />
                    <ProjectsComponent 
                        title="NORTHSTAR SPORTS ARENA"
                        listItem={listItem3}
                    />
                    <ProjectsComponent 
                        title="THE VILLAS ON WRENCH"
                        listItem={listItem4}
                    />
                    <ProjectsComponent 
                        title="MONTEAGLE APARTMENTS"
                        listItem={listItem5}
                    />
                    <ProjectsComponent 
                        title="LOCKWOOD VILLAS"
                        listItem={listItem6}
                    />
                </div>
            </div>

            <div className="projectspage__pagination">
                <div className="projectspage__pagination__container">
                    <ProjectPaginationComponent />
                </div>
            </div>

            <OtherProjects />

            <PaginationComponent 
                images={imagesArr}
                itemsPerPage={4}
                backgroundColorPagination="#eaeaea"
            />
        </Layout>
    )
}

export default ProjectsPage;