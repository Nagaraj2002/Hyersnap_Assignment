import React from 'react';
import ChipAutoComplete from './chipAutoComplete'; // Update the filename to match the actual filename on disk

import './App.css'; // Import your CSS file here

function App() {
  return (
    <div className="App">
      {/* Top Footer */}
      <div className="footer top-footer">Chip based autocomplete</div>

      {/* Your main content (e.g., ChipAutoComplete component) */}
      <ChipAutoComplete />

      {/* Bottom Footer */}
      <div className="footer bottom-footer">Internship Assignment (HyreSnap)</div>
    </div>
  );
}

export default App;
