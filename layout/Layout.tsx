import { FC, ReactNode, useState } from "react";
import Head from "next/head";
import { HeaderComponent } from '../components/header/Header';
import { SupCallMe } from '../components/supcallme/SupCallMe';
import { FooterComponents } from '../components/footer/FooterComponents';
import { SearchFrequentQuestions } from '../components/searchFrequentQuestions/SearchFrequentQuestions';

interface Props {
    title: string;
    description: string;
    keywords: string;
    children: ReactNode;
}

export const Layout:FC<Props> = ({title, description, keywords, children}) => {

    const [ isOpen, setIsOpen ] = useState(false);

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <link rel="shortcut icon" href="/images/logo-rosari-construction.png" />
            </Head>

            <SupCallMe />

            <HeaderComponent isOpen={isOpen} setIsOpen={setIsOpen} />

            { children }

            <FooterComponents />

            <SearchFrequentQuestions />
        </>
    )
}