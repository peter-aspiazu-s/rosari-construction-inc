import { FC, useState } from "react";


interface SpeechRecognitionEvent extends Event {
    results: SpeechRecognitionResultList;
}
  
interface SpeechRecognitionResultList {
    readonly length: number;
    item(index: number): SpeechRecognitionResult;
}
  
interface SpeechRecognitionResult {
    readonly isFinal: boolean;
    readonly length: number;
    item(index: number): SpeechRecognitionAlternative;
}
  
interface SpeechRecognitionAlternative {
    readonly transcript: string;
    readonly confidence: number;
}
  
declare var webkitSpeechRecognition: {
    new (): SpeechRecognition;
    prototype: SpeechRecognition;
};
  
declare class SpeechRecognition extends EventTarget {
    continuous: boolean;
    interimResults: boolean;
    lang: string;
    maxAlternatives: number;
    onaudioend: (this: SpeechRecognition, ev: Event) => any;
    onaudiostart: (this: SpeechRecognition, ev: Event) => any;
    onend: (this: SpeechRecognition, ev: Event) => any;
    onerror: (this: SpeechRecognition, ev: SpeechRecognitionError) => any;
    onnomatch: (this: SpeechRecognition, ev: SpeechRecognitionEvent) => any;
    onresult: (this: SpeechRecognition, ev: SpeechRecognitionEvent) => any;
    onsoundstart: (this: SpeechRecognition, ev: Event) => any;
    onsoundend: (this: SpeechRecognition, ev: Event) => any;
    onstart: (this: SpeechRecognition, ev: Event) => any;
    start(): void;
    stop(): void;
    abort(): void;
}
  
interface SpeechRecognitionError extends Event {
    error: string;
    message: string;
}


export const VoiceCapture: FC = () => {

    const [isListening, setIsListening] = useState(false);

    // const startListening = () => {
    //     if ('webkitSpeechRecognition' in window) {
    //     const recognition = new webkitSpeechRecognition();
    //     recognition.continuous = true;
    //     recognition.interimResults = true;

    //     recognition.onstart = () => {
    //         setIsListening(true);
    //     };

    //     recognition.onresult = (event: SpeechRecognitionEvent) => {
    //         const result = event.results[event.results.length - 1].item(0) as SpeechRecognitionAlternative;
    //         if (result) {
    //             const transcript = result.transcript;
    //             onVoiceInput(transcript);
    //         }
    //     };

    //     recognition.onend = () => {
    //         setIsListening(false);
    //     };

    //     recognition.start();
    //     }
    // };

    return (
        <div 
            className='searchfrequentquestions__voice-container' 
            // onClick={startListening}
        >
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-400q-50 0-85-35t-35-85v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q0 50-35 85t-85 35Zm0-240Zm-40 520v-123q-104-14-172-93t-68-184h80q0 83 58.5 141.5T480-320q83 0 141.5-58.5T680-520h80q0 105-68 184t-172 93v123h-80Zm40-360q17 0 28.5-11.5T520-520v-240q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760v240q0 17 11.5 28.5T480-480Z"/></svg>
            {
                isListening 
                ? <div className='searchfrequentquestions__voice-text'>Stop Listening</div>
                : <div className='searchfrequentquestions__voice-text'>Search this site with your voice</div>
            }
        </div>
    )
}