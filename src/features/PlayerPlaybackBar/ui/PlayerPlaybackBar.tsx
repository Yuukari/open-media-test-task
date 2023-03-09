import { FC, useContext, ChangeEvent, useState } from 'react';
import cn from 'classnames';

import { useAppSelector } from '../../../app/hooks';
import { usePlaybackPositionPercent } from '../hooks';

import { AudioPlayerContext } from '../../../app/providers/AudioPlayerProvider';

import styles from './PlayerPlaybackBar.module.css';

const PlayerPlaybackBar: FC = () => {
    const audioPlayer = useContext(AudioPlayerContext);
    const { isPlaying, isLoading, isStreaming, duration } = useAppSelector((state) => state.playerInstance);

    const [playingBefore, setPlayingBefore] = useState(false);
    
    const position = usePlaybackPositionPercent();

    const handleMouseDown = () => {
        if (isStreaming)
            return;

        if (isPlaying){
            setPlayingBefore(true);
            audioPlayer!.pause();
        }
    }
    
    const handleMouseUp = () => {
        if (isStreaming)
            return;

        if (playingBefore){
            audioPlayer!.play();
            setPlayingBefore(false);
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (isStreaming)
            return;

        const value = parseInt(e.currentTarget.value);

        const timePosition = (duration / 100) * value;
        audioPlayer!.currentTime = timePosition;
    }

    return <input 
        className={cn([
            styles.playerPlaybackBar,
            {[styles.playerPlaybackBar_loading]: isLoading},

            {[styles.playerPlaybackBar_streaming]: isStreaming},
            {[styles.playerPlaybackBar_streamingPlaying]: isStreaming && isPlaying}
        ])}

        type="range"
        min="0"
        max="100"

        // disabled={isLoading}
        value={position}

        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onChange={handleChange}
    ></input>
};

export default PlayerPlaybackBar;