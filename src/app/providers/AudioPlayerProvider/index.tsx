import { createContext, ReactNode, useEffect, useRef } from 'react';

import { useAppSelector, useAppDispatch } from '../../hooks';
import { setDuration, setPosition, setLoading, setPlaying, setVolume } from '../../../entities/PlayerInstance/model';
import { addNotification } from '../../../entities/NotificationsList/model';

import { getErrorText } from './helpers';

const AudioPlayerContext = createContext<HTMLMediaElement | null>(null);

type AudioProviderProps = {
    children: ReactNode
}

const AudioPlayerProvider = ({ children }: AudioProviderProps) => {
    const { source } = useAppSelector((state) => state.playerInstance);
    const dispatch = useAppDispatch();

    const audioRef = useRef<HTMLMediaElement | null>(null);

    useEffect(() => {
        if (audioRef.current != null){
            const audioPlayer = audioRef.current;

            audioPlayer.onloadstart = () => {
                dispatch(setLoading(true));
            }

            audioPlayer.onloadeddata = () => {
                dispatch(setLoading(false));
                dispatch(setDuration(audioPlayer.duration));
            }

            /* For loading chunks */

            audioPlayer.onwaiting = () => {
                dispatch(setLoading(true));
            }

            audioPlayer.oncanplay = () => {
                dispatch(setLoading(false));
            }

            

            audioPlayer.onplaying = () => {
                dispatch(setPlaying(true));
            }

            audioPlayer.onpause = () => {
                dispatch(setPlaying(false));
            }

            audioPlayer.onended = () => {
                dispatch(setPlaying(false));
            }

            audioPlayer.ontimeupdate = () => {
                dispatch(setPosition(audioPlayer.currentTime));
            }

            audioPlayer.onvolumechange = () => {
                dispatch(setVolume(audioPlayer.volume));
            }



            audioPlayer.onerror = () => {
                dispatch(addNotification({
                    type: 'error',
                    title: 'Failed to load data from source',
                    text: getErrorText(audioPlayer.error!.code)
                }))
            }
        }
    }, []);

    useEffect(() => {
        if (source != null){
            audioRef.current!.src = source;
            audioRef.current!.load();
        }
    }, [source])

    return <AudioPlayerContext.Provider value={audioRef.current}>
        {children}

        <audio ref={audioRef}/>
    </AudioPlayerContext.Provider>
}

export {
    AudioPlayerProvider,
    AudioPlayerContext
};