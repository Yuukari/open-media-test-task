export const getErrorText = (code: number): string => {
    switch (code){
        case 1:
            return 'Media download aborted';
        case 2:
            return 'It seems you have a network error. Please check your internet connection';
        case 3:
            return 'Failed to decode stream';
        case 4:
            return 'This source is not supported';
        default:
            return 'Unknown error';
    }
}