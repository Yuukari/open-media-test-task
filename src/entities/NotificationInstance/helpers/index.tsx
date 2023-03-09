import { ReactNode } from "react";

import { NotificationType } from "../../NotificationsList/types";

export const getNotificationIcon = (type: NotificationType): ReactNode => {
    switch (type){
        case 'error':
            return <svg width="3" height="16" viewBox="0 0 3 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.96002 14.008L0.488022 14.008L0.488022 16L2.96002 16L2.96002 14.008ZM2.69602 0.039999L0.776023 0.0399988L0.776022 12.04L2.69602 12.04L2.69602 0.039999Z" fill="black"/>
            </svg>
    }
}