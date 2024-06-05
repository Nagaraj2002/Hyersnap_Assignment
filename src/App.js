import React from 'react';
import ChipAutoComplete from './chipAutoComplete'; // Import the ChipAutoComplete component
import './App.css'; // Import the CSS file for styling

function App() {
  return (
    <div className="App">
      {/* Top Footer */}
      <div className="footer top-footer">Chip based autocomplete</div>

      {/* Main content: ChipAutoComplete component */}
      <ChipAutoComplete />

      {/* Bottom Footer */}
      <div className="footer bottom-footer">Internship Assignment (HyreSnap)</div>
    </div>
  );
}

export default App; // Export the App component as the default export
