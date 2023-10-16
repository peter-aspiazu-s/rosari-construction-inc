import { FC } from 'react';

interface Props {
    link: string;
}

export const MapComponent: FC<Props> = ({link}) => {
    return (
        <iframe
            className='mapcomponent' 
            src={link}
            style={{border:'0'}} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    )
}