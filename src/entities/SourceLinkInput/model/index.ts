import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import storage from '../../../shared/lib/storage';

const domainRegexPattern = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

interface SourceLinkInputState {
    value: string,
    error: string | null,

    recentListOpen: boolean,
    recentSources: string[]
}

const initialState: SourceLinkInputState = {
    value: "",
    error: null,

    recentListOpen: false,
    recentSources: storage.getRecentSources()
}

export const sourceLinkInputSlice = createSlice({
    name: 'sourceLinkInput',

    initialState,
    reducers: {
        setValue: (state, action: PayloadAction<string>) => {
            state.value = action.payload;

            if (state.value != "" && !domainRegexPattern.test(state.value))
                state.error = "Please, provide a valid URL to the file";
            else
                state.error = null;
        },

        setRecentListOpen: (state, action: PayloadAction<boolean>) => {
            state.recentListOpen = action.payload;
        },
        addRecentSource: (state, action: PayloadAction<string>) => {
            state.recentSources.push(action.payload);
        },

        reset: () => {
            return {...initialState,
                recentSources: storage.getRecentSources()
            }
        }
    },
})

export const { 
    setValue, 
    
    addRecentSource, 
    setRecentListOpen, 
    
    reset 
} = sourceLinkInputSlice.actions;
export default sourceLinkInputSlice.reducer;