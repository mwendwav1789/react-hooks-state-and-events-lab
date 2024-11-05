import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature

  function App() {
    // State to track if dark mode is enabled
    const [darkMode, setDarkMode] = useState(false);

    // Event handler to toggle dark mode
    const toggleDarkMode = () => {
      setDarkMode((prevMode) => !prevMode);
    };

    return (
      <div className={`App ${darkMode ? "dark-mode" : "light-mode"}`}>
        <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>
        <button onClick={toggleDarkMode}>
          Toggle {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    );
  }

  const appClass = false ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
