import { FC } from "react";

import { useAppSelector } from './../hooks';

import SourceLinkForm from '../../widgets/SourceLinkForm/ui';
import AudioPlayer from '../../widgets/AudioPlayer/ui';
import Notifications from "../../widgets/Notifications/ui";

import styles from './AppWrapper.module.css';

const AppWrapper: FC = () => {
    const { source } = useAppSelector((state) => state.playerInstance);
    
    return <div className={styles.appWrapper}>
        {source == null ?
            <SourceLinkForm/>
        :
            <AudioPlayer/>
        }

        <Notifications/>
    </div>
}

export default AppWrapper;