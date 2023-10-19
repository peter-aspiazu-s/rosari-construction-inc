import { FC } from 'react';
import { searchData } from '../../../data/searchData';
import { AccordionComponent } from '../../accordion/AccordionComponent';

interface Props {
    termSearch: string;
}

export const ResultSearch: FC<Props> = ({termSearch}) => {

    const filterSearchData = searchData.filter(({title, description}) => {

        if(termSearch.length <= 0){
            return false;
        }

        return title.includes(termSearch) || description.includes(termSearch);

    });


    console.log(filterSearchData);
    return (
        <div className={`resultsearch ${filterSearchData.length > 0 ? 'resultsearch__visible' : ''}`}>
            {
                filterSearchData.map(({id, title, description}) => (
                    <AccordionComponent key={id} title={title} description={description} />
                ))
            }
        </div>
    )
}