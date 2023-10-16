import { FC } from 'react';



interface Props {
    title: string;
    listItem: ListItemProps[];
}

type ListItemProps = {
    title: string;
    description?: string;
    bold: boolean;
}

export const ProjectsComponent: FC<Props> = ({title, listItem}) => {
    return (
        <div className='projectscomponent'>
            <div className='projectscomponent__container'>
                <div className='projectscomponent__title'>{title}</div>
                <div className='projectscomponent__line'></div>
                <div className='projectscomponent__listitem'>{
                    listItem.map(({title, description, bold}) => (
                        <div className='projectscomponent__item-container' key={title}>
                            {
                                bold 
                                ? <div><strong>{title}</strong> {description ? `- ${description}` : ''}</div>
                                : <div>{title} {description ? `- ${description}` : ''}</div>
                            }
                        </div>
                    ))
                }</div>
            </div>
        </div>
    )
}