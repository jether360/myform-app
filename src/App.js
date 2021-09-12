
import './App.css';
import MyForm from './component/form';
import Mainpage from './component/home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
    return (
      <Router>
      <div >
        <Switch>
        <Route path="/sign-up" component={MyForm} />
        <Route path="/" exact component = {Mainpage}/>
        </Switch>
      </div>
      </Router>
    );
}

export default App;
