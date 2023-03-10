import React, { useEffect, useState } from "react";
import AppRouter from "./components/Router";
import { auth } from "harrybase";

function App() {
  const [init, setInit] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null)

  useEffect(()=> {
    auth.onAuthStateChanged((user) => {
      if(user) {
        setIsLoggedIn(true)
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args)
        })
      } else {
        setIsLoggedIn(false)
      }
      setInit(true)
    })
  }, [])

  const reFreshUser = () => {
    const user = auth.currentUser
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args) => user.updateProfile(args)
    })
  }

  return (
    <div className="App">
      <React.Fragment>
      {init ? (
        <AppRouter
          reFreshUser={reFreshUser}
          isLoggedIn={isLoggedIn}
          userObj={userObj} />
        ) : (
        "Starting... Please wait a moment"
        )}
      <footer className="footer_harry"> &copy; Hojin(Harry) {new Date().toDateString()}   </footer>
      </React.Fragment>
    </div>
  );
}

export default App;

