import { useState } from "react";
import Header from "../../templates/Header";
function Page(props) {
  let [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  let themeClass = `theme-${theme}`;
  return (
    <Header
      id="App"
      layoutClassName={`${themeClass || ""} A4 w-100 h-100`}
      className="App-header"
    >
      <div style={{ width: "100%", marginTop: "1rem", textAlign: "center" }}>
        <button onClick={toggleTheme}>switch theme</button>
      </div>
    </Header>
  );
}
export default Page;
