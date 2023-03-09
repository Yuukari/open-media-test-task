import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { NotificationData, NotificationInstanceData } from '../types';

interface NotificationsListState {
    counter: number,
    notifications: NotificationInstanceData[]
}

const initialState: NotificationsListState = {
    counter: 1,
    notifications: []
}

export const notificationsListSlice = createSlice({
    name: 'notificationsList',

    initialState,
    reducers: {
        addNotification: (state, action: PayloadAction<NotificationData>) => {
            const notification = action.payload;
            state.notifications.push({
                ...notification,
                id: state.counter
            });

            state.counter++;
        },
        destroyNotification: (state, action: PayloadAction<number>) => {
            const id = action.payload;
            state.notifications = state.notifications.filter((notification) => notification.id != id);
        }
    }
})

export const { 
    addNotification,
    destroyNotification
} = notificationsListSlice.actions;
export default notificationsListSlice.reducer;