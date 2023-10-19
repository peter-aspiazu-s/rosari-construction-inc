import { FC, useEffect, useState } from 'react';


interface Props {
    linkVideo: string;
}

export const RecommendationVideo: FC<Props> = ({linkVideo}) => {

    const [autoPlayVideo, setAutoPlayVideo] = useState(false);

    useEffect(() => {
        setAutoPlayVideo(true);
    }, [linkVideo])

    return (
        <div className="recommendationvideo">
            <video 
                className="recommendationvideo__video" 
                controls 
                autoPlay={autoPlayVideo} 
            >
                <source src={linkVideo} type="video/mp4" />
            </video>
        </div>
    )
}