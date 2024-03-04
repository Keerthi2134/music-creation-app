import React, { useEffect, useRef } from 'react';

function MusicSnippetDisplay({ audioData }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioData) {
      audioRef.current.src = audioData.url;
      audioRef.current.load();
      audioRef.current.play();
    }
  }, [audioData]);

  return (
    <div>
      {audioData ? (
        <audio ref={audioRef} controls onEnded={() => setAudioData(null)} />
      ) : (
        <p>No music snippet available yet.</p>
      )}
    </div>
  );
}

export default MusicSnippetDisplay;
