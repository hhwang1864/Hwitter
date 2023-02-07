import React, { useState } from "react";
import AppRouter from "./Router";
import Router from "components/Router";
import auth from "myBase";
function App() {
  console.log(auth)

  const [isLoggedIn, setIsLoggedIn] = useState(auth.currentUser);
  return (
    <div className="App">
      <React.Fragment>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer> &copy; Hojin(Harry) {new Date().toDateString()}   </footer>
      </React.Fragment>
    </div>
  );
}

export default App;

