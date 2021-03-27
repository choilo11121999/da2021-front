import './App.css';
import { Login } from './components/login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App bg-light">
        <div className="d-flex justify-content-center">
          <div className="text-center">
            <Link to="/login" className="btn btn-primary" data-toggle="modal" data-target="#signupPage">Sign in</Link>
          </div>
          <div className="text-center">
            <a href="" className="btn btn-primary" data-toggle="modal" data-target="#signupPage">Sign up</a>
          </div>
        </div>
      </div>
      <Switch>
        <Route path="/login" component={Login}/>
        {/* <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
