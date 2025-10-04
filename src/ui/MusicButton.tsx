import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const START_OFFSET_SECONDS = 78;

export default function MusicButton() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { i18n } = useTranslation();

  const isKazakh = i18n.language === 'kk';
  const kazUrl = './musickazakh.mp3';
  const rusUrl = './music.m4a';

  useEffect(() => {
    const audio = new Audio(isKazakh ? kazUrl : rusUrl);
    audio.loop = true;

    const ensureStartOffset = () => {
      if (!isKazakh && audio.currentTime < START_OFFSET_SECONDS) {
        audio.currentTime = START_OFFSET_SECONDS;
      }
    };

    if (!isKazakh) {
      audio.addEventListener('loadedmetadata', ensureStartOffset);
    }

    if (audioRef.current) {
      audioRef.current.pause();
    }

    audioRef.current = audio;

    return () => {
      if (!isKazakh) {
        audio.removeEventListener('loadedmetadata', ensureStartOffset);
      }
      audio.pause();
    };
  }, [isKazakh]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    if (playing) {
      if (!isKazakh && audio.currentTime < START_OFFSET_SECONDS) {
        audio.currentTime = START_OFFSET_SECONDS;
      }
      audio.play().catch(() => setPlaying(false));
    } else {
      audio.pause();
    }
  }, [playing, isKazakh]);

  const togglePlay = () => {
    if (!audioRef.current) {
      return;
    }
    setPlaying((prev) => !prev);
  };

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        audioRef.current = null;
      }
    };
  }, []);

  return (
    <div className="flex items-center justify-center pt-10">
      <button
        onClick={togglePlay}
        className="relative w-24 h-24 rounded-full focus:outline-none"
      >
        <div
          className="w-full h-full rounded-full overflow-hidden animate-spin-slow"
          style={{
            backgroundImage:
              "url('https://optim.tildacdn.pro/tild3162-3861-4036-b766-633635323330/-/resize/220x/-/format/webp/photo.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          {playing ? (
            <svg width="50" height="50" viewBox="0 0 24 24" fill="black">
              <rect x="6" y="5" width="4" height="14" />
              <rect x="14" y="5" width="4" height="14" />
            </svg>
          ) : (
            <svg width="60" height="60" viewBox="0 0 24 24" fill="black">
              <polygon points="8,5 19,12 8,19" />
            </svg>
          )}
        </div>
      </button>
    </div>
  );
}
