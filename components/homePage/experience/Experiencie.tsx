import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

export const ExperienceComponent: FC = () => {
    return(
        <div className="experience">
            <div className="experience__container">
                <div className="experience__title"><strong>Expert Construction Services:</strong> Guarantee of Quality and Durability</div>
                
                <div className="experience__text">
                    <div className="experience__text-paragraph1">
                        <p>
                            To achieve the construction and maintenance that your home needs, it is 
                            important to have the experience and skills of experts in the construction 
                            area. Also, is essential to mention that our work is based on the highest 
                            quality standards, both in materials as in qualified labor, which is the key 
                            to a highly durable final work that ensure your home is kept in top 
                            condition.
                        </p>
                        <p>
                            In our company we focus on providing the best construction experience for
                            our clients. We have a team of professionals that keeps evolving as 
                            everything around us evolves, always maintaining the experience that only 
                            the years have provided us, thus being able to give you a work and support
                            team that can accompany you and advise you throughout the project you 
                            want to carry out. We know what that the construction market offers us, 
                            the great variety of prices and their quality.
                        </p>
                    </div>
                    <div className="experience__image">
                        <Image src="/images/roofing.jpg" alt="roofing image" layout="fill" />
                    </div>
                    <div className="experience__text-paragraph2">
                        <p>
                            In addition, we focus on meeting the deadlines established for each project.
                            We ensure that your experience is satisfactory and that your home is 
                            completely transformed and looking impressive as much as you are 
                            expecting.
                        </p>
                        <p>
                            If you are looking for a high-quality construction and coating service, do 
                            not hesitate to contact us. 
                            We will be happy to help and provide all kind of support you require,
                            everything you need to transform your home in the place of your dreams.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}