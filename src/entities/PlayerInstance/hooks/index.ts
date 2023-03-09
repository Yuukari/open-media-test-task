import { useContext, useEffect, useRef } from "react";
import { WebAudioContext } from "../../../app/providers/WebAudioProvider";

// const useWebAudio = () => {
//     const webAudioContext = useContext(WebAudioContext);
//     const audioRef = useRef<HTMLMediaElement | null>(null);

//     useEffect(() => {
//         if (audioRef != null){
//             const track = webAudioContext.createMediaElementSource(audioRef.current!);
//         }
//     }, [audioRef]);

//     return {
//         ref: audioRef
//     }
// }

// export {
//     useWebAudio
// }