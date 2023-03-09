import { FC, useContext } from 'react';

import { useAppSelector } from '../../../app/hooks';

import { AudioPlayerContext } from '../../../app/providers/AudioPlayerProvider';

import styles from './PlayerPlaybackButton.module.css';

const PlayerPlaybackButton: FC = () => {
    const audioPlayerContext = useContext(AudioPlayerContext);

    const { isPlaying, isLoading } = useAppSelector((state) => state.playerInstance);

    const handleClick = async () => {
        if (isPlaying)
            audioPlayerContext!.pause();
        else
            await audioPlayerContext!.play();
    }

    return <button 
        className={styles.playerPlaybackButton} 
        disabled={isLoading}

        onClick={handleClick}
    >
        {isPlaying ? 
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" width="4" height="40" fill="white"/>
                <rect x="32" width="4" height="40" fill="white"/>
            </svg>
        :
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 40V0H4.34286L40 18.7952V20.9639L4.34286 40H0Z" fill="white"/>
            </svg>
        }
    </button>;
};

export default PlayerPlaybackButton;