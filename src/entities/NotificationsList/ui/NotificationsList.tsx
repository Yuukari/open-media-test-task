import { FC } from 'react';

import { useAppSelector } from '../../../app/hooks';
import NotificationInstance from '../../NotificationInstance/ui';

import styles from './NotificationsList.module.css';

const NotificationsList: FC = () => {
    const { notifications } = useAppSelector((state) => state.notificationsList);

    return <div className={styles.notificationsList}>
        {notifications.length > 0 && notifications.map((notification, i) => {
            return <NotificationInstance
                key={i}

                id={notification.id}
                type={notification.type ?? 'default'}

                title={notification.title}
                text={notification.text}
            />
        })}
    </div>;
};

export default NotificationsList;