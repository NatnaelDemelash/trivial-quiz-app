import { createContext, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import ReactSwitch from "react-switch";

const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("dark");

  const toogleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={(theme, toogleTheme)}>
      <div id={theme}>
        <div className="switch">
          <ReactSwitch
            onChange={toogleTheme}
            checked={theme === "dark"}
            onColor="#eb984e"
            width={55}
            height={25}
            checkedIcon=""
            uncheckedIcon="🌙"
          />
        </div>
        <Header />
        <div className="container">
          <Main />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
