import React, { useState } from 'react';
import './chipAutoComplete.css';

// Sample data for suggestions
const suggestionsData = [
  'React', 'Hands On', 'Live Coding', 'Angular', 'Vue JS', 'JS Fundamentals',
  'Typescript', 'Browser/DOM', 'API', 'Router', 'Forms', 'Jest', 'Vue',
  'Templates', 'Directives', 'Routing', 'State management', 'Asynchronous programming',
  'React Js', 'Hooks', 'JSX', 'CSS', 'flex', 'DOM',
];

const ChipAutoComplete = () => {
  // State variables
  const [chips, setChips] = useState([]); // to store the list of chips
  const [inputValue, setInputValue] = useState(''); // to store the input value
  const [suggestions, setSuggestions] = useState(suggestionsData); // to store the suggestions list
  const [isInputFocused, setIsInputFocused] = useState(false); // to check if input field is focused

  // Handle input change
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Filter suggestions based on input value and chips
    if (value) {
      setSuggestions(suggestionsData.filter((s) => s.toLowerCase().includes(value.toLowerCase()) && !chips.includes(s)));
    } else {
      setSuggestions(suggestionsData.filter((s) => !chips.includes(s)));
    }
  };

  // Handle key down event
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue) {
      if (!chips.includes(inputValue)) {
        setChips([...chips, inputValue]); // Add input value to chips
        setInputValue(''); // Clear input value
        setSuggestions(suggestionsData.filter((s) => !chips.includes(s) && s !== inputValue)); // Update suggestions
      }
    }
  };

  // Handle chip removal
  const handleChipRemove = (chip) => {
    setChips(chips.filter((c) => c !== chip)); // Remove chip from the list
    setSuggestions([...suggestions, chip]); // Add the removed chip back to suggestions
  };

  // Highlight text function
  const highlightText = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi')); // Split text based on highlight
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
        {/* Show "Enter a tag" when no chips are present and input is not focused */}
        {chips.length === 0 && !isInputFocused && (
          <div className="input-tags">Enter a tag</div>
        )}
        {/* Display chips */}
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
        {/* Input field for adding chips */}
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
        {/* Show progress cursor when input is focused and value is present */}
        {inputValue && <div className="progress-cursor"></div>}
      </div>
      {/* Display suggestions */}
      {inputValue && (
        <div className="suggestions">
          {suggestions.map((suggestion) => (
            <div
              key={suggestion}
              className="suggestion"
              onClick={() => {
                setChips([...chips, suggestion]); // Add suggestion to chips
                setInputValue(''); // Clear input value
                setSuggestions(suggestionsData.filter((s) => !chips.includes(s) && s !== suggestion)); // Update suggestions
              }}
            >
              {highlightText(suggestion, inputValue)} {/* Highlight matching text */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChipAutoComplete;
