import React from 'react';
import ACVibe from './ACVibe.mp3';

export default function ACMusic() {
  const audio = new Audio (
    ACVibe, { interrupt: true });
  const start = () => {
    audio.play();
  };
  const stop = () => {
    audio.pause();
  };
  return (
    <div>
      <button className="music-button" onClick={start}>🎶 Island Vibes 🎶</button>
      <button className="music-button" onClick={stop}>Pause</button>
    </div>
    
  );
}
