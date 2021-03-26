import { BrowserRouter as Router , Route, Link, Switch} from 'react-router-dom';
//import AdminHome from './AdminHome';
import CreateUser from './CreateUser';
import CreateEvent from './CreateEvent';

const CreateNav = (props) => {
    return (
<div className="container mt-4">
    <Router>        
    <ul className="nav nav-pills mb-3" id="ex1" role="tablist">
    <li className="nav-item" role="presentation">
        <Link to="/createUser" className="nav-link bg-info text-dark">User</Link>
    </li>
    <div>
    <li className="nav-item" role="presentation">
        <Link to="/createEvent" className="nav-link bg-info text-dark">Event</Link>
    </li>
    </div>
    {/* <li class="nav-item" role="presentation">
        
    </li> */}
    </ul>
    <Switch>
        <Route exact component={CreateUser} path="/createUser"></Route>
        <Route exact component={CreateEvent} path="/createEvent"></Route>
    </Switch>
    </Router>
</div>
    )
}

export default CreateNav;