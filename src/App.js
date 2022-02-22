import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import TopNavbar from "./components/TopNavbar";
import EventCard from "./components/EventCard";
import PlanCard from "./components/PlanCard";
import Footer from "./components/Footer";
import Input from "./components/Input";
import Image from "./components/Image";
import SpeakerCard from "./components/SpeakerCard";
import ScheduleCard from "./components/ScheduleCard";
import BoothBanner from "./components/BoothBanner";

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
          <Button variant="primary">Button Prime</Button>
          <Button variant="secondary" className="ml-4">Button Sub</Button>
          <Button variant="tertiary" className="ml-4">Button Ter</Button>
        </div>
      </header>
      <Image/>
      <SpeakerCard/>
      <Input/>
      <ScheduleCard/>
      <BoothBanner variant="quarter"/>
    </div>
  );
}

export default App;
