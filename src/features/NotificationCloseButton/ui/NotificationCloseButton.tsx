import { FC } from 'react';

import styles from './NotificationCloseButton.module.css';

type NotificationCloseButtonProps = {
    onClick: () => void
}

const NotificationCloseButton: FC<NotificationCloseButtonProps> = (props) => {
    const { onClick } = props;

    return <button className={styles.notificationCloseButton} onClick={onClick}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.8">
                <path d="M25 7L7 25" stroke="#767577" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                <path d="M7 7L25 25" stroke="#767577" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
            </g>
        </svg>
    </button>;
};

export default NotificationCloseButton;