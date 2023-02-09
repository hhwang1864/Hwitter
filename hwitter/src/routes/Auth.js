import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import AuthForms from "./AuthForms";

import AuthSocialLinks from "./AuthSocialLinks";

const Auth = () => {
  return(
    <div className="authContainer">
      <FontAwesomeIcon
        className="authContainer_child twitter_icon"
        icon={faTwitter}
        color={"#04AAFF"}
        size="5x"
        style={{ marginBottom: 30 }}
      />
      <FontAwesomeIcon
        className="authContainer_child hastag_icon"
        icon={faHashtag}
        color={"#04AAFF"}
        size="5x"
        style={{ marginBottom: 30 }}
      />

      <AuthForms />
      <div>
      <AuthSocialLinks />
      </div>
    </div>
  )
}

export default Auth