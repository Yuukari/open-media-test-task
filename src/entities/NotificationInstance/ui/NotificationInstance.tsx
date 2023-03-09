import { FC, useEffect } from 'react';

import { useAppDispatch } from '../../../app/hooks';

import Notification from '../../../shared/components/Notification';
import { destroyNotification } from '../../NotificationsList/model';

import { NotificationInstanceData } from '../../NotificationsList/types';
import { getNotificationIcon } from '../helpers';

import styles from './NotificationInstance.module.css';
import NotificationCloseButton from '../../../features/NotificationCloseButton/ui';

const NotificationInstance: FC<NotificationInstanceData> = (props) => {
    const { id, type, title, text } = props;

    const dispatch = useAppDispatch();

    useEffect(() => {
        setTimeout(() => {
            dispatch(destroyNotification(id));
        }, 5000)
    }, []);

    const handleCloseClick = () => {
        dispatch(destroyNotification(id));

    }

    return <Notification
        className={styles.notificationInstance}

        fill

        title={title}
        text={text}

        icon={getNotificationIcon(type ?? 'default')}

        actions={
            <NotificationCloseButton
                onClick={handleCloseClick}
            />
        }
    />
};

export default NotificationInstance;