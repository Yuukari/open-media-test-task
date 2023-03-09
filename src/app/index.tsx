import { FC } from 'react';

import { Provider } from 'react-redux';
import { AudioPlayerProvider } from './providers/AudioPlayerProvider';
import { WebAudioProvider } from './providers/WebAudioProvider';

import { store } from './store';

import AppWrapper from './ui';

const App: FC = () => {
    return <Provider store={store}>
        <WebAudioProvider>
            <AudioPlayerProvider>
                <AppWrapper/>
            </AudioPlayerProvider>
        </WebAudioProvider>
    </Provider>
}

export default App;