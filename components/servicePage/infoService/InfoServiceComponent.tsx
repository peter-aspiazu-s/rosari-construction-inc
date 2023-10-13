import { FC, ReactNode } from 'react';
import { SlideServiceComponent } from '../slideService/SlideServiceComponent';
import { AccordionComponent } from '../../accordion/AccordionComponent';


interface Props {
    title?: string;
    subtitle?: string;
    description?: string;
    accordion: boolean;
    bold: boolean;
    imageArray?: arrImageType[];
}

type arrImageType = {
    img: string;
    alt: string;
}

const listItem = ['Fabrication', 'Both 5- & 6-inch Seamless Gutters', 'Downspouts', 'Assembly', 'Finishing', 'Cutting And Design']

export const InfoServiceComponent: FC<Props> = ({title, subtitle, description, accordion, bold, imageArray}) => {
    return (
        <div className="infoservicecomponent">
            <div className="infoservicecomponent__container">
                {
                    title && 
                    <div 
                        className="infoservicecomponent__title"
                        style={{
                            fontWeight: bold ? '600 !important' : '400 !important'
                        }}    
                    >{title}</div>
                }
                <div className="infoservicecomponent__container-info-slide">
                    <div 
                        className={imageArray ? "infoservicecomponent__container-info" : "infoservicecomponent__container-info2"} 
                    >
                        { subtitle && <div className="infoservicecomponent__subtitle">{subtitle}</div> }

                        { description && <div className="infoservicecomponent__description">{description}</div> }

                        { 
                            accordion 
                            && <AccordionComponent 
                                    title='We Offer The Following Seamless Gutter Services'
                                    listItem={listItem}
                                /> 
                        }
                    </div>

                    {
                        imageArray &&    
                        <SlideServiceComponent imageArray={imageArray} />
                    }
                </div>
            </div>
        </div>
    )
}