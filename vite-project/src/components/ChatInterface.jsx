import React, { useState } from 'react';
import './ChatInterface.css';

function ChatInterface({ query }) {
  const [customQuery, setCustomQuery] = useState('');

  const followUpQuestions = [
    `Can you tell me more about "${query}"?`,
    `What would you like to know regarding "${query}"?`,
    `Do you have any specific details about "${query}"?`,
  ];

  const handleCustomQueryChange = (e) => {
    setCustomQuery(e.target.value);
  };

  const handleCustomQuerySubmit = () => {
    console.log(`Custom query submitted: ${customQuery}`);
    setCustomQuery(''); // Reset the custom query input after submission
  };

  return (
    <div className="chat-interface">
      <h3 className="chat-title">Chat Interface</h3>
      <div className="chat-message">
        <p>You searched for: <strong>{query}</strong></p>
      </div>
      
      <div className="custom-query">
        <input
          type="text"
          placeholder="Type your custom query..."
          value={customQuery}
          onChange={handleCustomQueryChange}
          className="query-input"
        />
        <button onClick={handleCustomQuerySubmit} className="query-submit">
          Submit
        </button>
      </div>

      <div className="follow-up-questions">
        {followUpQuestions.map((question, index) => (
          <div key={index} className="question">{question}</div>
        ))}
      </div>
    </div>
  );
}

export default ChatInterface;
