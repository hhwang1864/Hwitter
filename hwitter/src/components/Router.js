import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <Router>
      <Routes>
        {isLoggedIn ?
          <React.Fragment>
            <Route exact path="/"element={<Home />}>

            </Route>
          </React.Fragment>
         :
          <Route exact path="/" element={<Auth />}>
          </Route>
        }
      </Routes>
    </Router>
  );
};
export default AppRouter;