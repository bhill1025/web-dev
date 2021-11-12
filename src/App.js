import './App.css';
import './vendors/bootstrap/css/bootstrap.css';
import './vendors/bootstrap/css/cyborg-bootstrap.min.css';

import HelloWorld from "./components/a6/HelloWorld";
import Practice from "./components/a6/Practice";
import Practice2 from "./components/a7/Practice"
import Build from "./components/a6/Build";
import Build2 from "./components/a7/Build";
import {Link} from "react-router-dom";

import {BrowserRouter, Route} from "react-router-dom";
import React from "react";

function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Route path="/a6/hello" exact={true}>
                  <HelloWorld/>
              </Route>
              <Route path={["/a6", "/a6/practice"]} exact={true}>
                  <Practice/>
              </Route>
              <Route path={["/", "/a7", "/a7/practice"]} exact={true}>
                  <Practice2/>
              </Route>
              <Route path="/a7/twitter">
                  <Build2/>
              </Route>
              <Route path="/a6/build" exact={true}>
                  <Build/>
              </Route>
              <Route path="/a6/others" exact={true}>
                  <Link to="/">
                      Back
                  </Link>
                  <h1>WebDev - Non-React Assignments</h1>
                  <ul>
                      <li><a href="a3/practice/css/index.html">A3 - CSS Index</a></li>
                      <li><a href="a3/twitter/navigation.html">A3 - Twitter clone</a></li>
                      <br/>
                      <li><a href="a4/practice/bootstrap/index.html">A4 - Bootstrap Index</a></li>
                      <li><a href="a4/twitter/navigation.html">A4 - Twitter clone</a></li>
                      <br/>
                      <li><a href="a5/practice/js/index.html">A5 - JS Index</a></li>
                      <li><a href="a5/twitter/navigation.html">A5 - Twitter clone</a></li>
                  </ul>
              </Route>
          </div>
      </BrowserRouter>
  );
}
export default App;

