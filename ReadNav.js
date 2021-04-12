import { BrowserRouter as Router , Route, Link, Switch} from 'react-router-dom';
import UserDetails from './UserDetails';
import ReadEvent from './ReadEvent';
import ReadBlog from './ReadBlog';
import ReadCategory from './ReadCategory';
import ReadServices from './ReadService';

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
    <div>
        <li className="nav-item" role="presentation">
            <Link to="/readBlog" className="nav-link bg-info text-dark">Blog</Link>
        </li>
    </div>
    <div>
        <li className="nav-item" role="presentation">
            <Link to="/readCategory" className="nav-link bg-info text-dark">Category</Link>
        </li>
    </div>
    <div>
        <li className="nav-item" role="presentation">
            <Link to="/readServices" className="nav-link bg-info text-dark">Services</Link>
        </li>
    </div>
    
    {/* <li class="nav-item" role="presentation">
        
    </li> */}
    </ul>
    <Switch>
        <Route exact component={UserDetails} path="/readUser"></Route>
        <Route exact component={ReadEvent} path="/readEvent"></Route>
        <Route exact component={ReadBlog} path="/readBlog"></Route>
        <Route exact component={ReadCategory} path="/readCategory"></Route>
        <Route exact component={ReadServices} path="/readServices"></Route>
    </Switch>
    </Router>
</div>
    )
}

export default CreateNav;