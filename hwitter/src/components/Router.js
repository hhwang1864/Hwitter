import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "../routes/Home";
import Navigation from "components/Navigation";
import Profile from "routes/Profile";


const AppRouter = ( {isLoggedIn}) => {
  return (
    <Router>
      {isLoggedIn && <Navigation />}
      <Routes>
        {isLoggedIn ?
          <React.Fragment>
            <Route
              exact path="/" element={<Home />}>
            </Route>
            <Route exact path="/profile" element={<Profile />}> </Route>
          </React.Fragment>
         : (
          <React.Fragment>
          <Route
            exact path="/" element={<Auth />}>
          </Route>
          </React.Fragment>
        )}
      </Routes>
    </Router>
  )
}
export default AppRouter;