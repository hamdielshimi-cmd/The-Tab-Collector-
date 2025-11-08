import { useState } from 'react';

export default function GeminiChat() {
  const [prompt, setPrompt] = useState('');
  const [reply, setReply] = useState('');

  const handleAskGemini = async () => {
    // Placeholder logic — replace with Gemini API call
    setReply("Hello! How can I assist you today?");
  };

  return (
    <div className="gemini-chat">
      <textarea
        placeholder="Ask Gemini anything..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button onClick={handleAskGemini}>Ask Gemini</button>
      {reply && <div className="gemini-reply">{reply}</div>}
    </div>
  );
}
