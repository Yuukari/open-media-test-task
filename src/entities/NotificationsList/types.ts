export type NotificationType = 'default' | 'error';

export interface NotificationData {
    title?: string,
    text: string,
    type?: NotificationType
}

export interface NotificationInstanceData extends NotificationData {
    id: number
}