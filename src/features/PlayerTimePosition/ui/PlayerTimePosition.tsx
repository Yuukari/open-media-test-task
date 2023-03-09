import { FC } from 'react';

import { useTimePosition } from '../hooks';

import styles from './PlayerTimePosition.module.css';

const PlayerTimePosition: FC = () => {
    const timePosition = useTimePosition();

    return <div className={styles.playerTimePosition}>
        {timePosition}
    </div>;
};

export default PlayerTimePosition;