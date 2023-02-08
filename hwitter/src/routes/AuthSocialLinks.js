import React from "react";
import {
  GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "harrybase";

const AuthSocialLinks = () => {
  const onSocialClick = (event) => {
    const { name } = event.target
    let provider;
    // console.log(provider)
    if (name === "google") {
      provider = new GoogleAuthProvider()
    } else if (name === "github") {
      provider = new GithubAuthProvider()
    }
    signInWithPopup(auth, provider)
    }

  return(
    <React.Fragment>
      <button onClick={onSocialClick} name="google">Continue with Google</button>

      <button onClick={onSocialClick} name="github">Continue with Github</button>
    </React.Fragment>
  )
}

export default AuthSocialLinks