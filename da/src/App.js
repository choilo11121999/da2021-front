import './App.css';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Header from './components/user/Header';
import Footer from './components/user/Footer';
import Home from './components/user/Home';
import MoviePlaying from './components/user/MoviePlaying';
import MovieUpcoming from './components/user/MovieUpcoming';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
   <Router>
    <div className="container class"> 
      <Header />

      {/* Router */}
      <Route path="/" exact component={Home}/>
      <Route path="/user/login" component={Login}/>
      <Route path="/user/register" component={Register}/>
      <Route path="/movie/movie_playing" component={MoviePlaying} />
      <Route path="/movie/movie_upcoming" component={MovieUpcoming} />
    </div>

    <Footer />
  </Router>
  );
}

export default App;
