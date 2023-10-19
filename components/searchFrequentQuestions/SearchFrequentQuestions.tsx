import { FC, useEffect, useState, useRef, ChangeEvent, FormEvent } from 'react';
import { ResultSearch } from './resultSearch/ResultSearch';


export const SearchFrequentQuestions: FC = () => {

    const [searchView, setSearchView] = useState(false);

    const [formData, setFormData] = useState('');

    useEffect(() => {
        setSearchView(!searchView);
    }, []);

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(formData.trim().length <= 0){
            return;
        }

        setFormData('');

    }

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setFormData(e.target.value);
    }

    return (
        <div className={`searchfrequentquestions ${!searchView ? 'searchfrequentquestions__hidden' : ''}`}>
            <div className='searchfrequentquestions__container'>
                <div 
                    className='searchfrequentquestions__icon-container'
                    onClick={() => setSearchView(!searchView)}    
                >
                    {
                        searchView
                        ? <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
                        : <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                    }
                </div>

                <div className='searchfrequentquestions__search-container'>
                    <div className='searchfrequentquestions__call-container'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M162-120q-18 0-30-12t-12-30v-162q0-13 9-23.5t23-14.5l138-28q14-2 28.5 2.5T342-374l94 94q38-22 72-48.5t65-57.5q33-32 60.5-66.5T681-524l-97-98q-8-8-11-19t-1-27l26-140q2-13 13-22.5t25-9.5h162q18 0 30 12t12 30q0 125-54.5 247T631-329Q531-229 409-174.5T162-120Zm556-480q17-39 26-79t14-81h-88l-18 94 66 66ZM360-244l-66-66-94 20v88q41-3 81-14t79-28Zm358-356ZM360-244Z"/></svg>
                        <div className='searchfrequentquestions__text-call'>Click to call</div>
                    </div>
                    <form 
                        className='searchfrequentquestions__form'
                        onSubmit={handleSubmit}
                    >
                        <input 
                            className='searchfrequentquestions__input' 
                            type="text" 
                            placeholder='What can we helpyou find?' 
                            name={formData}
                            value={formData}
                            onChange={handleChange}
                        />
                    </form>

                    <ResultSearch termSearch={formData} />

                    <div className='searchfrequentquestions__voice-container'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-400q-50 0-85-35t-35-85v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q0 50-35 85t-85 35Zm0-240Zm-40 520v-123q-104-14-172-93t-68-184h80q0 83 58.5 141.5T480-320q83 0 141.5-58.5T680-520h80q0 105-68 184t-172 93v123h-80Zm40-360q17 0 28.5-11.5T520-520v-240q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760v240q0 17 11.5 28.5T480-480Z"/></svg>
                        <div className='searchfrequentquestions__voice-text'>Search this site with your voice</div>
                    </div>
                </div>
            </div>
        </div>
    )
}