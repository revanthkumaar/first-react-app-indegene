import logo from './logo.svg';
import './App.css';
import {Route } from 'react-router-dom'
import HomePage from './pages/home-page/home-page.component'
import Signin from './pages/sigin-page/signin.component'
import RotateFunction from './testReduxwithUI'

function App() {

  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/reduxexample" component={RotateFunction} />
    </div>
  );
}
export default App;
