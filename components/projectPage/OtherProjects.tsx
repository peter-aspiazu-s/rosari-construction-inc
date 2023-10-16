import { FC } from 'react';
import { Dancing_Script } from '@next/font/google';


const dacing_script = Dancing_Script({
    subsets: ['latin'],
    weight: ['400', '700']
})

export const OtherProjects: FC = () => {
    return (
        <div className='otherprojects'>
            <div className='otherprojects__container'>
                <div className={`${dacing_script.className} otherprojects__text`}>Other Projects We’ve Completed:</div>
                <ul className='otherprojects__list-container'>
                    <li className='otherprojects__list'>Tim Hortons</li>
                    <li className='otherprojects__list'>Royal Car Wash</li>
                    <li className='otherprojects__list'>Habitat For Humanity</li>
                    <li className='otherprojects__list'>Kids Escaping Drugs</li>
                    <li className='otherprojects__list'>Post Offices</li>
                    <li className='otherprojects__list'>Assisted Living Centers</li>
                    <li className='otherprojects__list'>Golf Courses</li>
                    <li className='otherprojects__list'>Parks And Recreational</li>
                </ul>
            </div>
        </div>
    )
}