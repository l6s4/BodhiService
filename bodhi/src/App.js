import {React,Component} from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import LoginPage from './pages/Login';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Redirect from="/" to="/login" exact />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
