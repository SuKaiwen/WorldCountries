import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/home';
import Details from './Components/details';

function App() {
  return (
    <div className="header">
        <Switch>
            <Route path = "/details">
                <Details />
            </Route>
            <Route path = "/">
                <Home />
            </Route>
        </Switch>
    </div>
  );
}

export default App;
