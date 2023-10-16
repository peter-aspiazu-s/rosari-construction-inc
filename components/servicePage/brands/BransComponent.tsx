import { FC } from "react";
import Image from "next/image";
import { Dancing_Script } from '@next/font/google';


interface Props {
    title: string;
    description: string;
    description2?: string;
    images?: ImageProp[];
    buttons?: ButtonProp[];
    listItem?: string[];
}

type ImageProp = {
    img: string;
    alt: string;
}

type ButtonProp = {
    text: string;
    link: string;
}

const dacing_script = Dancing_Script({
    subsets: ['latin'],
    weight: ['400', '700']
})

export const BrandsComponents: FC<Props> = ({title, description, description2, images, buttons, listItem}) => {

    console.log(images);

    return (
        <div className="brandscomponents">
            <div className="brandscomponents__container">
                <div className={`${dacing_script.className} brandscomponents__title`}>{title}</div>
                <div className="brandscomponents__description">{description}</div>
                {description2 && <div className="brandscomponents__description">{description2}</div>}

                {
                    images && 
                    <div className="brandscomponents__image-container">
                        {images.map(({img, alt}) => (
                            <div className="brandscomponents__image" key={img}>
                                <Image src={img} alt={alt} layout="fill" />
                            </div>
                        ))}
                    </div>
                }

                {
                    buttons &&
                    <div className="brandscomponents__buttons-container">
                        {buttons.map(({text, link}) => (
                            <a href="#" key={text}>{text}</a>
                        ))}
                    </div>
                }

                {
                    listItem &&
                    <div className="brandscomponents__list-container">
                        {listItem.map((item) => (
                            <div className="brandscomponents__item" key={item}>{item}</div>
                        ))}
                    </div>
                }
            </div>
        </div>
    )
}