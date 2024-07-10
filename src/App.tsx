import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ContentComponent from "./components/ContentComponent";
import TitleComponent from "./components/TitleComponent";
import ThemeProvider from "./ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <ButtonComponent />
        <TitleComponent />
        <ContentComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;
