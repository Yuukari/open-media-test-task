import { FC, ReactNode } from 'react';
import cn from 'classnames';

import styles from './Notification.module.css';

type NotificationProps = {
    className?: string,

    text: string,
    title?: string,
    fill?: boolean,

    icon?: ReactNode,
    actions?: ReactNode
}

const Notification: FC<NotificationProps> = (props) => {
    const { className, title, text, icon, actions, fill } = props;

    return <div className={cn([
        styles.notification, 
        {[styles.notification_fill]: fill == true},

        className
    ])}>
        {icon && <div className={styles.notification__icon}>
            {icon}    
        </div>}

        <div className={styles.notificationContent}>
            {title && <p className={styles.notificationContent__title}>{title}</p>}
            <p className={styles.notificationContent__text}>{text}</p>
        </div>

        {actions && <div className={styles.notification__actions}>
            {actions}
        </div>}
    </div>;
};

export default Notification;