
import { useState } from "react";
import Navbar from "./Navbar";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`app ${theme}`}>
      <Navbar toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
