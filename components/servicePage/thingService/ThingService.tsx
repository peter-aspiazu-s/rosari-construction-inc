import { FC } from 'react';
import { AccordionComponent } from '../../accordion/AccordionComponent';


export const ThingService: FC = () => {
    return (
        <div className='thingsservice'>
            <div className='thingsservice__container'>
                <div className='thingsservice__title'>THINGS TO CONSIDER</div>
                <div className='thingsservice__container-accordion'>
                    <AccordionComponent
                        title='Why do you want a deck?'
                        description='This seems pretty simple, but what you decide could impact the design of your deck. Are you looking to entertain guests or grow a patio garden? Maybe you want a deck to incorporate a pool or spa.'
                    />
                    <AccordionComponent
                        title='Your Budget.'
                        description='The intricacy of the design, size of the deck, and built-in extras all depend on how much money you’re willing to spend. The good news is we do price matching to help our customers!'
                    />
                    <AccordionComponent
                        title='Deck Design, Shape, & Size.'
                        description='The size and shape of your deck might be dictated by the design of your home. A great-looking deck complements the home’s architecture and coordinates with the surrounding landscape design.'
                    />
                </div>
            </div>
        </div>
    )
}