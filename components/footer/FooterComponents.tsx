import { FC } from 'react';
import { CallToActionFooter } from './CallToActionFooter';
import { ContactFooter } from './ContactFooter';
import { MenuFooter } from './MenuFooter';
import { CopyrightFooter } from './CopyrightFooter';


export const FooterComponents: FC = () => {
    return (
        <footer className='footercomponents'>
            <CallToActionFooter />

            <ContactFooter />

            <MenuFooter />

            <CopyrightFooter />
        </footer>
    )
}