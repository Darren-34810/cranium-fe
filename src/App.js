import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import TopNavbar from "./TopNavbar";

function App() {
  return (
    <div className="App">
      <TopNavbar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="flex">
          <Button variant="primary" className="mr-4">Button Prime</Button>
          <Button variant="secondary">Button Sub</Button>
        </div>
      </header>
    </div>
  );
}

export default App;
