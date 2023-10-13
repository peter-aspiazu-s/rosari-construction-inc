import { FC, useState, useRef, useEffect } from 'react';


interface Props {
    title: string;
    description?: string;
    listItem?: string[];
}

export const AccordionComponent: FC<Props> = ({title, description, listItem}) => {

    const [accordionActive, setAccordionActive] = useState(false);

    const contentRef = useRef<HTMLDivElement>(null);

    // Calcula el max-height en función del contenido
    const maxContentHeight = accordionActive ? (contentRef.current?.scrollHeight || 0) : 0;

    return (
        <div className='accordioncomponent' onClick={() => setAccordionActive(!accordionActive)}>
            <div className='accordioncomponent__container'>
                <div className='accordioncomponent__visible-container'>
                    <div 
                        className='accordioncomponent__visible-text'
                        style={{
                            color: accordionActive ? '#333' : '#7a7a7a',
                            transition: 'all .3s'
                        }}
                    >{title}</div>
                    <div className='accordioncomponent__ico'>
                        <div>{`${accordionActive ? '-' : '+'}`}</div>
                    </div>
                </div>

                <div className={
                        `${accordionActive ? 'accordioncomponent__active' : ''} 
                        accordioncomponent__invisible-container`
                    }
                    style={{ maxHeight: maxContentHeight }}
                >
                    {
                        description && <div ref={contentRef}>{description}</div>
                    }

                    {
                        listItem && (
                            <div className="accordioncomponent__listitem-container" ref={contentRef}>
                                <ul>
                                    {listItem.map((item) => (
                                        <li key={item} style={{textDecoration: ''}}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        )
                    }
                    
                </div>
            </div>
        </div>
    )
}