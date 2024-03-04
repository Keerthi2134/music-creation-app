import React, { useState } from 'react';

function PromptInput({ value, onChange, onSubmit, isLoading }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(value);
  };

  return (
    <form onSubmit={handleSubmit} disabled={isLoading}>
      <label htmlFor="prompt">Enter your music prompt:</label>
      <input
        type="text"
        id="prompt"
        value={value}
        onChange={onChange}
        placeholder="e.g., Uplifting electronic music"
        required
      />
      <button type="submit">{isLoading ? 'Generating...' : 'Generate Music'}</button>
    </form>
  );
}

export default PromptInput;
