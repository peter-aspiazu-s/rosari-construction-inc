import { FC, useState, useEffect } from 'react';
import { SpinnerLoading } from '../../spinnerLoading/SpinnerLoading';


declare var webkitSpeechRecognition: {
    new (): SpeechRecognition;
    prototype: SpeechRecognition;
};

interface SpeechRecognition extends EventTarget {
    onaudioend: ((this: SpeechRecognition, ev: Event) => any) | null;
    onaudiostart: ((this: SpeechRecognition, ev: Event) => any) | null;
    onend: ((this: SpeechRecognition, ev: Event) => any) | null;
    onerror: ((this: SpeechRecognition, ev: SpeechRecognitionError) => any) | null;
    onnomatch: ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => any) | null;
    onresult: ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => any) | null;
    onsoundstart: ((this: SpeechRecognition, ev: Event) => any) | null;
    onsoundend: ((this: SpeechRecognition, ev: Event) => any) | null;
    onstart: ((this: SpeechRecognition, ev: Event) => any) | null;

    start(): void;
    stop(): void;
    abort(): void;

    continuous: boolean;
    interimResults: boolean;
    lang: string;
    maxAlternatives: number;
}

interface SpeechRecognitionError extends Event {
    error: string;
    message: string;
}

interface SpeechRecognitionEvent extends Event {
    results: SpeechRecognitionResultList;
}

let recognition: any = null;
if(typeof window !== "undefined" && "webkitSpeechRecognition" in window){
    recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.lang = "en-US";
};

interface Props {
    setCapturedText: (transcript: string) => void;
}

export const VoiceCapture: FC<Props> = ({setCapturedText}) => {

    const [isMicroActive, setIsMicroActive] = useState(false);
    const [isListening, setIsListening] = useState(false);

    useEffect(() => {
        if(!recognition) return;

        recognition.onresult = (event: SpeechRecognitionEvent) => {
            const result = event.results.item(0);
            if (result) {
                const transcript = result.item(0).transcript;
                setCapturedText(transcript);
            }
            recognition.stop();
            setIsListening(false);
        };

    }, []);
    
    const startListening = () => {
        setCapturedText("");
        setIsListening(true);
        recognition.start();
    };
    
    const stopListening = () => {
        setIsListening(false);
        recognition.stop();
        setIsMicroActive(false);
    }

    console.log({isMicroActive})
    

  return (
    <div className='searchfrequentquestions__voice-container'>
            
            {
                isListening ? 
                (
                    <div onClick={stopListening}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-400q-50 0-85-35t-35-85v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q0 50-35 85t-85 35Zm0-240Zm-40 520v-123q-104-14-172-93t-68-184h80q0 83 58.5 141.5T480-320q83 0 141.5-58.5T680-520h80q0 105-68 184t-172 93v123h-80Zm40-360q17 0 28.5-11.5T520-520v-240q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760v240q0 17 11.5 28.5T480-480Z"/></svg>
                        <div className='searchfrequentquestions__voice-text'><SpinnerLoading /></div>
                    </div>
                ) : 
                (
                    <div onClick={startListening}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-400q-50 0-85-35t-35-85v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q0 50-35 85t-85 35Zm0-240Zm-40 520v-123q-104-14-172-93t-68-184h80q0 83 58.5 141.5T480-320q83 0 141.5-58.5T680-520h80q0 105-68 184t-172 93v123h-80Zm40-360q17 0 28.5-11.5T520-520v-240q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760v240q0 17 11.5 28.5T480-480Z"/></svg>
                        <div className='searchfrequentquestions__voice-text'>Search this site with your voice</div>
                    </div>
                )
            }
        </div>
  )
}
