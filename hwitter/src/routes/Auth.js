import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import AuthForms from "./AuthForms";

import AuthSocialLinks from "./AuthSocialLinks";
import News from "components/News";

const Auth = () => {
  return(
    <React.Fragment>
      <News />
      <div className="authContainer">
      <FontAwesomeIcon
        className="authContainer_child twitter_icon"
        icon={faTwitter}
        color={"#04AAFF"}
        size="5x"
        style={{ marginBottom: 10 }}
      />
      <FontAwesomeIcon
        className="authContainer_child hastag_icon"
        icon={faHashtag}
        color={"#04AAFF"}
        size="5x"
        style={{ marginBottom: 10 }}
      />
      <AuthForms />
      <div>
      <AuthSocialLinks />
      </div>    </div>
    </React.Fragment>
  )
}

export default Auth