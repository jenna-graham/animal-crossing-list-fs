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
      <button onClick={start}>Island Vibes</button>
      <button onClick={stop}>Pause</button>
    </div>
    
  );
}
