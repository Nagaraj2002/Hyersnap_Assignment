# Chip Based Autocomplete

This project is a React application that features a chip-based autocomplete input field. Users can enter tags, select suggestions, and see them displayed as chips. 

## Features

- **Autocomplete Suggestions:** As the user types, suggestions are filtered and displayed.
- **Chip Display:** Selected tags are displayed as chips.
- **Dynamic Highlighting:** Matching parts of the suggestions are highlighted.
- **Progress Cursor:** A rotating progress cursor appears while the user is typing.
- **Input Placeholder:** A placeholder text "Enter a tag" is displayed when no chips are selected.

- ## Screenshot
![ChipAutoComplete Screenshot](https://drive.google.com/uc?export=view&id=14G9tJ5__ttKQ5aRyDd-erATFNT-ybB1w
)

## Project Structure
chip-autocomplete/

├── node_modules/

├── public/

│ ├── favicon.ico

│ ├── index.html

│ ├── logo192.png

│ ├── logo512.png

│ ├── manifest.json

│ └── robots.txt

├── src/

│ ├── ChipAutoComplete.js

│ ├── App.js

│ ├── index.js

│ ├── chipAutoComplete.css

│ └── index.css

├── .gitignore

├── package.json

├── README.md

├── yarn.lock / package-lock.json

└── screenshot.png


## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/Nagaraj2002/Hyersnap_Assignment
    ```

2. **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3. **Run the application:**
    ```bash
    npm start
    # or
    yarn start
    ```

The application will run at `http://localhost:3000`.

## Code Explanation

**App.js**

This file sets up the main application and includes the **ChipAutoComplete** component.

**ChipAutoComplete.js**

This file contains the main functionality of the chip-based autocomplete feature, including state management for chips, input handling, suggestions filtering, and chip removal.

**chipAutoComplete.css**

This file contains the CSS styles for the **ChipAutoComplete** component, including styles for the container, chips, input field, suggestions, and the progress cursor.

## Contribution

Contributions are welcome! Please fork this repository and submit a pull request for any features, bug fixes, or enhancements.

## License

This project is licensed under the MIT License.
