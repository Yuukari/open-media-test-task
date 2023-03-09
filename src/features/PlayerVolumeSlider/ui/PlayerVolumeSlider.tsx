import { ChangeEvent, FC, useContext } from 'react';

import { useAppSelector } from '../../../app/hooks';

import { AudioPlayerContext } from '../../../app/providers/AudioPlayerProvider';

import styles from './PlayerVolumeSlider.module.css';

const PlayerVolumeSlider: FC = () => {
    const audioPlayer = useContext(AudioPlayerContext);

    const { volume, isLoading } = useAppSelector((state) => state.playerInstance);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.currentTarget.value);
        audioPlayer!.volume = value;
    }

    return <input 
        className={styles.playerVolumeSlider}
        type="range"

        min="0"
        max="1.0"
        step="any"

        disabled={isLoading}
        value={volume}

        onChange={handleChange}
    />
};

export default PlayerVolumeSlider;