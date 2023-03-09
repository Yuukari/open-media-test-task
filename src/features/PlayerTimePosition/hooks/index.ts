import { useAppSelector } from "../../../app/hooks";

const useTimePosition = (): string => {
    const { position } = useAppSelector((state) => state.playerInstance);

    const seconds = Math.floor(position / 60);
    const minutes = Math.floor(position % 60);

    return `${seconds.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
}

export {
    useTimePosition
}