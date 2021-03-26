import { BrowserRouter as Router, Link, Switch,Route} from 'react-router-dom';
//import UserDetails from './UserDetails';
//import AdminHome from './AdminHome';
import './App.css';
import CreateNav from './CreateNav';
import ReadNav from './ReadNav';

function AdminNavbar()
{
      return (
        <div>
        <Router>
        <nav className="navbar navbar-expand-lg navbar-light shadow-5" style={{ borderBottom:'1px solid white' }}>
          <div className="collapse navbar-collapse" id="navbarText">
            <div className="logo"></div>
            <h5 className="mr-5 mt-1 text-danger" style={{ marginLeft : '15px'}}> Admin Panel</h5>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/create" className="nav-link text-danger"><i class="fas fa-home"></i> Create</Link>
              </li>
              <li className="nav-item">
                <Link to="/read" className="nav-link text-danger"><i class="fas fa-user"></i> Read</Link>
              </li>
              
            </ul>
          </div>
        </nav>
        <Switch>
          <Route exact component={CreateNav} path="/create" />
          <Route exact component={ReadNav} path="/read" />
        </Switch>
      </Router>
      </div>
      )
}

export default AdminNavbar;