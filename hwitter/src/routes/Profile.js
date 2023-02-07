import React from "react";
import { auth } from "harrybase";

const Profile = () => {
  const onLogOutClick = () => {
    auth.signOut()
  }
  return (
    <React.Fragment>
      <button onClick={onLogOutClick}>Log Out</button>
    </React.Fragment>

  )
}

export default Profile