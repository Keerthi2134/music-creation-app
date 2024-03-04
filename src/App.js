import React, { useState, useEffect } from 'react';
import PromptInput from './components/PromptInput';
import MusicSnippetDisplay from './components/MusicSnippetDisplay';

function App() {
  const [prompt, setPrompt] = useState('');
  const [audioData, setAudioData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateMusic = async (newPrompt) => {
    if (newPrompt === prompt) return; // Prevent unnecessary API calls for the same prompt

    setError(null); // Clear previous errors before making a new request
    setIsLoading(true);
    setPrompt(newPrompt); // Update state even before API call to disable button

    const apiKey = 'AIzaSyAKZ3qsbHowI9ooxZMKA3BzeCIW9R1xMQU'; // Replace with your actual API key
    const url = `https://api.gemini.ai/v1/music/generate?prompt=${newPrompt}&api_key=${apiKey}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('API request failed');
      }
      const data = await response.json();
      setAudioData(data.audio_data);
    } catch (error) {
      console.error('Error generating music:', error);
      setError(error.message); // Set a user-friendly error message
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Optional: Pre-populate prompt field with a default suggestion
    setPrompt('Uplifting electronic music');
  }, []);

  return (
    <div className="app-container">
      <h1>Music Creation App</h1>
      <PromptInput value={prompt} onChange={setPrompt} onSubmit={generateMusic} isLoading={isLoading} />
      {error && <p className="error-message">{error}</p>}
      <MusicSnippetDisplay audioData={audioData} />
    </div>
  );
}

export default App;
