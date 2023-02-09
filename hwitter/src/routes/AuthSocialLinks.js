import React from "react";
import {
  GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "harrybase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";


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

    <div className="authBtns">
      <button onClick={onSocialClick} name="google"  className="authBtn" >Continue with Google <FontAwesomeIcon icon={faGoogle} /></button>

      <button onClick={onSocialClick} name="github"  className="authBtn">Continue with Github <FontAwesomeIcon icon={faGithub} /></button>
    </div>
  )
}

export default AuthSocialLinks