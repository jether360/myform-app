
import './App.css';
import MyForm from './component/form';
import Mainpage from './component/home';
import SignUp from './component/SignUp';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
    return (
      <Router>
      <div >
        <Switch>
        <Route path="/SignUp" component={SignUp} />
        <Route path="/SignIn" component={MyForm} />
        <Route path="/" exact component = {Mainpage}/>
        </Switch>
      </div>
      </Router>
    );
}

export default App;
