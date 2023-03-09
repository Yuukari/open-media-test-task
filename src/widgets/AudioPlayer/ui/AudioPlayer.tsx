import { FC, useContext } from 'react';

import { useAppDispatch } from '../../../app/hooks';
import { clearSource } from '../../../entities/PlayerInstance/model';

import { AudioPlayerContext } from '../../../app/providers/AudioPlayerProvider';

import PlayerInstance from '../../../entities/PlayerInstance/ui';

import styles from './AudioPlayer.module.css';

const AudioPlayer: FC = () => {
    const audioPlayer = useContext(AudioPlayerContext);

    const dispatch = useAppDispatch();

    const handleBackButtonClick = () => {
        audioPlayer!.pause();
        dispatch(clearSource());
    }

    return <div className={styles.audioPlayer}>
        <button 
            className={styles.audioPlayer__backButton} 
            onClick={handleBackButtonClick}
        >← Back</button> 

        <div className={styles.audioPlayer__instance}>
            <PlayerInstance/>
        </div>
    </div>;
};

export default AudioPlayer;