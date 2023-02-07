import React, { useEffect, useState } from "react";
import AppRouter from "./Router";
import Router from "components/Router";
import { auth } from "harrybase";

function App() {
  const [init, setInit] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(()=> {
    auth.onAuthStateChanged((user) => {
      if(user) {
        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
      }
      setInit(true)
    })

  }, [])
  return (
    <div className="App">
      <React.Fragment>
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "Starting... please wait a second..."}
      <footer> &copy; Hojin(Harry) {new Date().toDateString()}   </footer>
      </React.Fragment>
    </div>
  );
}

export default App;

