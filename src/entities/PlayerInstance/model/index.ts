import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import storage from '../../../shared/lib/storage';

export type AudioPlayerState = 'playing' | 'paused';

interface PlayerInstanceState {
    source: string | null;

    isLoading: boolean,
    isPlaying: boolean,
    isStreaming: boolean,

    position: number,
    duration: number,

    volume: number
}

const initialState: PlayerInstanceState = {
    source: null,

    isLoading: false,
    isPlaying: false,
    isStreaming: false,

    position: 0,
    duration: 0,

    volume: 1
}

export const playerInstanceSlice = createSlice({
    name: 'playerInstance',

    initialState,
    reducers: {
        setSource: (state, action: PayloadAction<string>) => {
            state.source = action.payload;
            storage.addRecentSource(action.payload);
        },
        clearSource: (state) => {
            state.source = null;
        },

        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setPlaying: (state, action: PayloadAction<boolean>) => {
            state.isPlaying = action.payload;
        },

        // setState: (state, action: PayloadAction<AudioPlayerState>) => {
        //     state.state = action.payload;
        // },
        
        setPosition: (state, action: PayloadAction<number>) => {
            state.position = action.payload;
        },
        setDuration: (state, action: PayloadAction<number>) => {
            state.duration = action.payload;
            state.isStreaming = !isFinite(action.payload);
        },

        setVolume: (state, action: PayloadAction<number>) => {
            state.volume = action.payload;
        }
    },
})

export const { 
    setSource, 
    clearSource,

    setLoading,
    setPlaying,
    
    setPosition, 
    setDuration,

    setVolume
} = playerInstanceSlice.actions;
export default playerInstanceSlice.reducer;