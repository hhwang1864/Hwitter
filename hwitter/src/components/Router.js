import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "../routes/Home";
import Navigation from "components/Navigation";
import Profile from "routes/Profile";


const AppRouter = ({ reFreshUser, isLoggedIn, userObj }) => {
  return (
    <div
    style={{
      maxWidth: 890,
      width: "100%",
      margin: "0 auto",
      marginTop: 80,
      display: "flex",
      justifyContent: "center",
    }}

    >
    <Router>
      {isLoggedIn && <Navigation userObj={userObj} />}
      <Routes>
        {isLoggedIn ?
          <Route>
            <Route
              exact path="/" element={<Home userObj={userObj}/>}>
            </Route>
            <Route
              exact path="/profile"
              element={<Profile
                userObj={userObj}
                reFreshUser={reFreshUser}
              />}>
            </Route>
          </Route>
         : (
          <React.Fragment>
          <Route
            exact path="/" element={<Auth />}>
          </Route>
          </React.Fragment>
        )}
      </Routes>
    </Router>
    </div>
  )
}
export default AppRouter;