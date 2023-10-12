import { FC } from 'react';
import { FormFooter } from './FormFooter';
import { Dancing_Script } from '@next/font/google';


const dacing_script = Dancing_Script({
    subsets: ['latin'],
    weight: ['400', '700']
})


export const ContactFooter: FC = () => {
    return (
        <div className='contactfooter'>

            <FormFooter />                

            <div className='contactfooter__container-infocontact'>
                <div className='contactfooter__infocontact'>
                    <div className='contactfooter__infocontact-container-ico'>
                        <div className='contactfooter__infocontact-ico'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
                        </div>
                    </div>
                    <div className='contactfooter__infocontact-text-container'>
                        <div className={`${dacing_script.className} contactfooter__infocontact-text-title`}>Besroi Roofing & Siding</div>
                        <div className='contactfooter__infocontact-text-subtitle'>Buffalo</div>
                        <a className='contactfooter__infocontact-text-link' href="#">5434 Genesee Street</a>
                        <a className='contactfooter__infocontact-text-link' href="#">Lancaster, NY 14086</a>
                        <div className='contactfooter__infocontact-text-subtitle'>Rochester</div>
                        <a className='contactfooter__infocontact-text-link' href="#">711 Emerson St.</a>
                        <a className='contactfooter__infocontact-text-link' href="#">Rochester, NY 14613</a>
                    </div>
                </div>

                <div className='contactfooter__infocontact'>
                    <div className='contactfooter__infocontact-container-ico'>
                        <div className='contactfooter__infocontact-ico'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M754-81q-8 0-15-2.5T726-92L522-296q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l85-85q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l204 204q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13l-85 85q-6 6-13 8.5T754-81Zm0-95 29-29-147-147-29 29 147 147ZM205-80q-8 0-15.5-3T176-92l-84-84q-6-6-9-13.5T80-205q0-8 3-15t9-13l212-212h85l34-34-165-165h-57L80-765l113-113 121 121v57l165 165 116-116-43-43 56-56H495l-28-28 142-142 28 28v113l56-56 142 142q17 17 26 38.5t9 45.5q0 24-9 46t-26 39l-85-85-56 56-42-42-207 207v84L233-92q-6 6-13 9t-15 3Zm0-96 170-170v-29h-29L176-205l29 29Zm0 0-29-29 15 14 14 15Zm549 0 29-29-29 29Z"/></svg>
                        </div>
                    </div>
                    <div className='contactfooter__infocontact-text-container'>
                        <div className={`${dacing_script.className} contactfooter__infocontact-text-title`}>Business Hours</div>
                        <div className='contactfooter__infocontact-text-hour'>7:30 AM - 4:00 PM</div>
                    </div>
                </div>

                <div className='contactfooter__infocontact'>
                    <div className='contactfooter__infocontact-container-ico'>
                        <div className='contactfooter__infocontact-ico'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-200v120h400v-120H280Zm200 100q17 0 28.5-11.5T520-180q0-17-11.5-28.5T480-220q-17 0-28.5 11.5T440-180q0 17 11.5 28.5T480-140ZM280-320h400v-400H280v400Zm0-480h400v-40H280v40Zm0 560v120-120Zm0-560v-40 40Z"/></svg>
                        </div>
                    </div>
                    <div className='contactfooter__infocontact-text-container'>
                        <div className={`${dacing_script.className} contactfooter__infocontact-text-title`}>Contact</div>
                        <div className='contactfooter__infocontact-text'>Phone: <a className='contactfooter__infocontact-text-link' href="#">716-684-0355</a></div>
                        <div className='contactfooter__infocontact-text'>Fax: <span>716-684-0751</span></div>
                        <div className='contactfooter__infocontact-text'>Email: <a className='contactfooter__infocontact-text-link' href="#">info@besroiroofing.com</a></div>
                    </div>
                </div>

                <div className='contactfooter__socialmedia'>
                    <a href="#">
                        <svg className='contactfooter__socialmedia-facebook' aria-hidden="true" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 264 512" data-fa-i2svg=""><path d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"></path></svg>
                    </a>
                    <a href="#">
                        <svg className='contactfooter__socialmedia-google' aria-hidden="true" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" data-fa-i2svg=""><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                    </a>
                </div>
            </div>

        </div>
    )
}