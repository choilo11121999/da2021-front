import './App.css';
import { Login } from './components/login/Login';
import Register from './components/register/Register';
import Header from './components/user/Header';
import Footer from './components/user/Footer';
import Home from './components/user/Home'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  return (
   <>
    <div className="container class"> 
      <Header />
      <Home />
    </div>
    <Footer />
   </>
    // <Router>
    //   <div className="App bg-light">
    //     <div className="d-flex justify-content-center">
    //       <div className="text-center">
    //         <Link to="/login" className="btn btn-primary" >Sign in</Link>
    //       </div>
    //       <div className="text-center">
    //       <Link to="/register" className="btn btn-primary" >Sign up</Link>
    //       </div>
    //     </div>
    //   </div>
    //   <Switch>
    //     <Route path="/login" component={Login}/>
    //     <Route path="/register" component={Register}/>

    //     {/* <Route path="/users">
    //       <Users />
    //     </Route>
    //     <Route path="/">
    //       <Home />
    //     </Route> */}
    //   </Switch>
    // </Router>
  );
}

export default App;
