import simoneMusica from "../assets/music/simone_musica.mp3";
import { useEffect, useRef } from "react";

function Music() {
  const audioRef = useRef(null);

  useEffect(() => {
    const tryPlayAudio = () => {
      const audio = audioRef.current;
      if (!audio) return;

      audio.volume = 0.2;

      audio
        .play()
        .then(() => {
          window.removeEventListener("click", tryPlayAudio);
          window.removeEventListener("mousemove", tryPlayAudio);
          window.removeEventListener("touchstart", tryPlayAudio);
          window.removeEventListener("keydown", tryPlayAudio);
        })
        .catch(() => {});
    };

    window.addEventListener("click", tryPlayAudio);
    window.addEventListener("mousemove", tryPlayAudio);
    window.addEventListener("touchstart", tryPlayAudio);
    window.addEventListener("keydown", tryPlayAudio);

    return () => {
      window.removeEventListener("click", tryPlayAudio);
      window.removeEventListener("mousemove", tryPlayAudio);
      window.removeEventListener("touchstart", tryPlayAudio);
      window.removeEventListener("keydown", tryPlayAudio);
    };
  }, []);

  return <audio ref={audioRef} src={simoneMusica} autoPlay loop></audio>;
}

export default Music;
