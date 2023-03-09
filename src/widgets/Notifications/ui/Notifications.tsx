import { FC } from 'react';

import NotificationsList from '../../../entities/NotificationsList/ui';

import styles from './Notifications.module.css';

const Notifications: FC = () => {
    return <div className={styles.notifications}>
        <NotificationsList/>
    </div>;
};

export default Notifications;