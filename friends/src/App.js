import logo from './logo.svg';
import './App.css';
import  AddFriendForm from './components/AddFriendForm';
import LoginForm from './components/LoginForm';
import FriendList from './components/FriendList';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route} from 'react-router';
import { PrivateRoute } from './utils/PrivateRoute';

function App() {
  return (
    <div >
      
      <Router>
      <Route exact path="/" component={LoginForm} />
      <PrivateRoute path='/friendlist' component={FriendList}/>
      <PrivateRoute path='/addfriend' component={AddFriendForm}/>
      </Router>
    </div>
  );
}

export default App;
