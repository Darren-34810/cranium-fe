import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Welcome from "./pages/Welcome";
import Dashboard from "./pages/testing/Dashboard";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from={'/'} to={'/welcome'}/>
        <Route exact path="/welcome" component={Welcome}/>
        <Route exact path={'/dashboard'} component={Dashboard}/>
        <Route exact path={'/homepage'} component={Homepage}/>

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
    </Router>
  );
}

export default App;
