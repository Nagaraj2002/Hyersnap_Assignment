import React, { useState } from 'react';
import './chipAutoComplete.css';

const suggestionsData = [
  'React', 'Hands On', 'Live Coding', 'Angular', 'Vue JS', 'JS Fundamentals',
  'Typescript', 'Browser/DOM', 'API', 'Router', 'Forms', 'Jest', 'Vue',
  'Templates', 'Directives', 'Routing', 'State management', 'Asynchronous programming',
  'React Js', 'Hooks', 'JSX', 'CSS', 'flex', 'DOM',
];

const ChipAutoComplete = () => {
  const [chips, setChips] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState(suggestionsData);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (value) {
      setSuggestions(suggestionsData.filter((s) => s.toLowerCase().includes(value.toLowerCase()) && !chips.includes(s)));
    } else {
      setSuggestions(suggestionsData.filter((s) => !chips.includes(s)));
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue) {
      if (!chips.includes(inputValue)) {
        setChips([...chips, inputValue]);
        setInputValue('');
        setSuggestions(suggestionsData.filter((s) => !chips.includes(s) && s !== inputValue));
      }
    }
  };

  const handleChipRemove = (chip) => {
    setChips(chips.filter((c) => c !== chip));
    setSuggestions([...suggestions, chip]);
  };

  const highlightText = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return (
      <span>
        {parts.map((part, index) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <span key={index} className="highlight">{part}</span>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  return (
    <div className="chip-autocomplete">
      <div className="chips-container" onClick={() => setIsInputFocused(true)}>
        {chips.length === 0 && !isInputFocused && (
          <div className="input-tags">Enter a tag</div>
        )}
        {chips.map((chip) => (
          <div key={chip} className="chip">
            <span>{chip}</span>
            <button
              className="chip-remove"
              onClick={() => handleChipRemove(chip)}
            >
              &times;
            </button>
          </div>
        ))}
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => !inputValue && setIsInputFocused(false)}
          placeholder=""
          className="input-field"
        />
        {inputValue && <div className="progress-cursor"></div>}
      </div>
      {inputValue && (
        <div className="suggestions">
          {suggestions.map((suggestion) => (
            <div
              key={suggestion}
              className="suggestion"
              onClick={() => {
                setChips([...chips, suggestion]);
                setInputValue('');
                setSuggestions(suggestionsData.filter((s) => !chips.includes(s) && s !== suggestion));
              }}
            >
              {highlightText(suggestion, inputValue)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChipAutoComplete;
