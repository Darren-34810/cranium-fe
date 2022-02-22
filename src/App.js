import logo from "./logo.svg";
import "./App.css";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
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
import Welcome from "./pages/Welcome";
import Dashboard from "./pages/testing/Dashboard";
function App() {
  return (
    <>
      {/*<div className="App">*/}
      {/*  <TopNavbar/>*/}
      {/*  <header className="App-header">*/}
      {/*    <img src={logo} className="App-logo" alt="logo"/>*/}
      {/*    <p>*/}
      {/*      Edit <code>src/App.js</code> and save to reload.*/}
      {/*    </p>*/}
      {/*    <a*/}
      {/*      className="App-link"*/}
      {/*      href="https://reactjs.org"*/}
      {/*      target="_blank"*/}
      {/*      rel="noopener noreferrer"*/}
      {/*    >*/}
      {/*      Learn React*/}
      {/*    </a>*/}
      {/*    <div className="flex">*/}
      {/*      <Button variant="primary">Button Prime</Button>*/}
      {/*      <Button variant="secondary" className="ml-4">Button Sub</Button>*/}
      {/*      <Button variant="tertiary" className="ml-4">Button Ter</Button>*/}
      {/*    </div>*/}
      {/*  </header>*/}
      {/*  <Image/>*/}
      {/*  <SpeakerCard/>*/}
      {/*  <Input/>*/}
      {/*  <ScheduleCard/>*/}
      {/*  <BoothBanner variant="quarter"/>*/}
      {/*</div>*/}

      <Router>
        <div className="App">
          <Switch>
            <Redirect exact from={'/'} to={'/welcome'}/>
            <Route exact path="/welcome" component={Welcome}/>
            <Route exact path={'/dashboard'} component={Dashboard}/>

            {/*<Route exact path="/homepage" element={<Homepage />} />*/}
            {/*<Route exact path="/event" element={<EventPage />} />*/}
            {/*<Route exact path="/eventlanding" element={<EventLandingPage />} />*/}
            {/*<Route exact path="/signin" element={<SignIn />} />*/}
            {/*<Route exact path="/signup" element={<SignUp />} />*/}
            {/*<Route exact path="/dashboard" element={<DashboardOverview />} />*/}
            {/*<Route exact path="/dashboard/overview" element={<DashboardOverview />} />*/}
            {/*<Route exact path="/dashboard/events" element={<DashboardEvents />} />*/}
            {/*<Route exact path="/dashboard/create" element={<DashboardCreate />} />*/}
            {/*<Route exact path="/dashboard/billing" element={<DashboardBilling />} />*/}
            {/*<Route exact path="/dashboard/integration" element={<DashboardIntegration />} />*/}
            {/*<Route exact path="/dashboard/events" element={<DashboardEvents />} />*/}
            {/*<Route exact path="/dashboard/profile" element={<DashboardProfile />} />*/}
            {/*<Route exact path="/dashboard/events/overview" element={<EventDashboardOverview />} />*/}
            {/*<Route exact path="/dashboard/events/setup" element={<EventDashboardBasicSetup />} />*/}
            {/*<Route exact path="/dashboard/events/registration" element={<EventDashboardRegistration />} />*/}
            {/*<Route exact path="/dashboard/events/schedule" element={<EventDashboardSchedule />} />*/}
            {/*<Route exact path="/dashboard/events/venue" element={<EventDashboardVenue />} />*/}
            {/*<Route exact path="/dashboard/events/people" element={<EventDashboardPeople />} />*/}
            {/*<Route exact path="/dashboard/events/marketing" element={<EventDashboardMarketing />} />*/}
            {/*<Route exact path="/dashboard/events/recording" element={<EventDashboardRecording />} />*/}
            {/*<Route exact path="/dashboard/events/analytics" element={<EventDashboardAnalytics />} />*/}
            {/*<Route path="*" element={<NotFound />} />*/}
          </Switch>
        </div>
      </Router>
      <BoothBanner/>
      <Image/>
      <ScheduleCard/>
      <SpeakerCard/>
    </>
  );
}

export default App;
