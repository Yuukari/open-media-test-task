import { useAppSelector } from "../../../app/hooks";

const usePlaybackPositionPercent = (): string => {
    const { position, duration } = useAppSelector((state) => state.playerInstance);

    const positionPercent = 100 / (duration / position);
    return positionPercent.toString();
}

export {
    usePlaybackPositionPercent
}