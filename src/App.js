import "./App.css";
import EditablePage from "./components/editablePage";

const App = () => {
  return (
    <>
      <header className="App-header">
        <nav className="logo">Text Editor</nav>
      </header>
      <div className="App">
        <p className="placeholder">Type / for blocks</p>
        <EditablePage />
      </div>
    </>
  );
};

export default App;
