import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import List from './component/ListComponent'
import Login from './component/LoginComponent'
import Register from './component/RegisterComponent'
import NewItem from './component/NewItemComponent';


class Blog extends React.Component {

  
    render() {
      return (
        <React.Fragment>
          <h1>An awesome blog will be here</h1>
          <Router>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/list">List</Link>
              </li>
              <li>
                <Link to="/newItem">New Item</Link>
              </li>
            </ul>
            <Route exact path="/" component={NewItem} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/list" component={List} />
            <Route path="/newItem" component={NewItem} />

            
          </Router>
        </React.Fragment>

      );
    }
  }

  export default Blog;