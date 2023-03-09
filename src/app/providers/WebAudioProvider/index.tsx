import { createContext, ReactNode } from 'react';

const audioContext = new window.AudioContext();

const WebAudioContext = createContext(audioContext);

type WebAudioProviderProps = {
    children: ReactNode
}

const WebAudioProvider = ({ children }: WebAudioProviderProps) => {
    return <WebAudioContext.Provider value={audioContext}>{children}</WebAudioContext.Provider>
}

export {
    WebAudioProvider,
    WebAudioContext
};