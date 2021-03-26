import { BrowserRouter as Router , Route, Link, Switch} from 'react-router-dom';
import UserDetails from './UserDetails';

const CreateNav = (props) => {
    return (
<div className="container mt-4">
    <Router>        
    <ul className="nav nav-pills mb-3" id="ex1" role="tablist">
    <li className="nav-item" role="presentation">
        <Link to="/readUser" className="nav-link bg-info text-dark">User</Link>
    </li>
    <div>
    <li className="nav-item" role="presentation">
        <Link to="/readEvent" className="nav-link bg-info text-dark">Event</Link>
    </li>
    </div>
    {/* <li class="nav-item" role="presentation">
        
    </li> */}
    </ul>
    <Switch>
        <Route exact component={UserDetails} path="/readUser"></Route>
        {/* <Route exact component={CreateE} path="/readEvent"></Route> */}
    </Switch>
    </Router>
</div>
    )
}

export default CreateNav;