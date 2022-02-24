import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Welcome from "./pages/Welcome";
import Dashboard from "./pages/testing/Dashboard";
import Homepage from "./pages/Homepage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import EventLandingPage from "./pages/EventLandingPage";
import TestCard from "./pages/testing/TestCard";
import Profile from "./pages/HomeDashboard/Profile";
import EventPage from "./pages/HomeDashboard/EventPage";
import Overview from "./pages/HomeDashboard/Overview";

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from={'/'} to={'/welcome'}/>
        <Route exact path="/welcome" component={Welcome}/>
        <Route exact path={'/dashboard'} component={Dashboard}/>
        <Route exact path={'/homepage'} component={Homepage}/>
        <Route exact path={'/event-landing-page'} component={EventLandingPage}/>
        <Route exact path={'/testcard'} component={TestCard}/>
        <Route exact path={'/profile'} component={Profile}/>
        <Route exact path={'/event-page'} component={EventPage}/>
        <Route exact path={'/overview'} component={Overview}/>


        {/*<Route exact path="/event" component={EventPage} />*/}
        {/*<Route exact path="/eventlanding" component={EventLandingPage} />*/}
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        {/*<Route exact path="/dashboard" component={DashboardOverview} />*/}
        {/*<Route exact path="/dashboard/overview" component={DashboardOverview} />*/}
        {/*<Route exact path="/dashboard/events" component={DashboardEvents} />*/}
        {/*<Route exact path="/dashboard/create" component={DashboardCreate} />*/}
        {/*<Route exact path="/dashboard/billing" component={DashboardBilling} />*/}
        {/*<Route exact path="/dashboard/integration" component={DashboardIntegration} />*/}
        {/*<Route exact path="/dashboard/events" component={DashboardEvents} />*/}
        {/*<Route exact path="/dashboard/profile" component={DashboardProfile} />*/}
        {/*<Route exact path="/dashboard/events/overview" component={EventDashboardOverview} />*/}
        {/*<Route exact path="/dashboard/events/setup" component={EventDashboardBasicSetup} />*/}
        {/*<Route exact path="/dashboard/events/registration" component={EventDashboardRegistration} />*/}
        {/*<Route exact path="/dashboard/events/schedule" component={EventDashboardSchedule} />*/}
        {/*<Route exact path="/dashboard/events/venue" component={EventDashboardVenue} />*/}
        {/*<Route exact path="/dashboard/events/people" component={EventDashboardPeople} />*/}
        {/*<Route exact path="/dashboard/events/marketing" component={EventDashboardMarketing} />*/}
        {/*<Route exact path="/dashboard/events/recording" component={EventDashboardRecording} />*/}
        {/*<Route exact path="/dashboard/events/analytics" component={EventDashboardAnalytics} />*/}
        {/*<Route path="*" component={NotFound} />*/}
      </Switch>
    </Router>
  );
}

export default App;
