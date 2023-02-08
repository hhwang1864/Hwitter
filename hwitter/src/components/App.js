import React, { useEffect, useState } from "react";
import AppRouter from "./Router";
import { auth } from "harrybase";

function App() {
  const [init, setInit] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null)

  useEffect(()=> {
    auth.onAuthStateChanged((user) => {
      if(user) {
        setIsLoggedIn(true)
        setUserObj(user)
      } else {
        setIsLoggedIn(false)
      }
      setInit(true)
    })

  }, [])
  return (
    <div className="App">
      <React.Fragment>
      {init ? (
        <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} />
      ) : (
        "Initializing..."
      )}
      <footer> &copy; Hojin(Harry) {new Date().toDateString()}   </footer>
      </React.Fragment>
    </div>
  );
}

export default App;

