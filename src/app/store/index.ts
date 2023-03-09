import { combineReducers, configureStore } from '@reduxjs/toolkit'

import sourceLinkInput from '../../entities/SourceLinkInput/model';
import playerInstance from '../../entities/PlayerInstance/model';
import notificationsList from '../../entities/NotificationsList/model';

const reducer = combineReducers({
    sourceLinkInput,
    playerInstance,
    notificationsList
});

export const store = configureStore({
    reducer
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;