import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { AboutPage } from '../components/aboutPage';
import { LoginPage } from '../components/loginPage';
import { NotFoundPage } from '../components/notFoundPage';
import { ProfilePage } from '../components/profilePage';
import useStyles from './Routes.styles'

export interface RoutesContainerBaseProps {

}

export interface RoutesViewProps extends RoutesContainerBaseProps {

}

const RoutesView: React.FC<RoutesViewProps> = () => {
  const classes = useStyles()

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component={ProfilePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );


}

export default RoutesView