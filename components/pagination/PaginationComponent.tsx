import { FC, useState } from 'react';
import Image from 'next/image';
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

interface PaginationProps {
  images: ImagePagination[]; // Un array de URLs de imágenes
  itemsPerPage: number; // Cantidad de imágenes por página
}

type ImagePagination = {
   img: string;
   alt: string;
}

export const PaginationComponent: FC<PaginationProps> = ({images, itemsPerPage}) => {

    const [currentPage, setCurrentPage] = useState(0);

    const filterImages = (): ImagePagination[] => {
        return images.slice(currentPage, currentPage + itemsPerPage);
    }

    const nextPage = () => {
        if(images.length > currentPage + itemsPerPage ){
            setCurrentPage( currentPage + itemsPerPage )
        }
    }

    const prevPage = () => {
        if(currentPage > 0){
            setCurrentPage( currentPage - itemsPerPage )
        }
    }

    const onInit = () => {
        console.log('lightGallery has been initialized');
    }

  return (
    <div className="paginationcomponent">
        <div className="paginationcomponent__container">
            {/* <div className="paginationcomponent__image-container"> */}
            <LightGallery
                elementClassNames='paginationcomponent__image-container'
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                download={false}
            >
                {
                    filterImages().map(({img, alt}) => (
                        <a href={img} className='paginationcomponent__image animate__animated animate__fadeIn' key={img}>
                            <Image src={img} alt={alt} layout='fill' />
                        </a>
                    ))
                }
            </LightGallery>
            {/* </div> */}

            <div className="paginationcomponent__button-container">
                <div className={`${currentPage <= 0 ? 'paginationcomponent__button-disable' : 'paginationcomponent__button'}`} onClick={prevPage}>Prev</div>
                <div className={`${!(images.length > currentPage + itemsPerPage) ? 'paginationcomponent__button-disable' : 'paginationcomponent__button'}`} onClick={nextPage}>Next</div>
            </div>
        </div>
    </div>
  );
};
