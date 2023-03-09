import { FC } from 'react';

import { useAppSelector } from '../../../app/hooks';

import PlayerPlaybackButton from '../../../features/PlayerPlaybackButton/ui';
import PlayerPlaybackBar from '../../../features/PlayerPlaybackBar/ui';
import PlayerTimePosition from '../../../features/PlayerTimePosition/ui';
import PlayerVolumeSlider from '../../../features/PlayerVolumeSlider/ui';

import styles from './PlayerInstance.module.css';

const PlayerInstance: FC = () => {
    return <div className={styles.playerInstance}>
        <PlayerPlaybackButton/>

        <PlayerPlaybackBar/>

        <div className={styles.playerInstance__footer}>
            <PlayerTimePosition/>
            <PlayerVolumeSlider/>
        </div>
    </div>;
};

export default PlayerInstance;