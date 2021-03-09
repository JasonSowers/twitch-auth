import React from "react";
import { createButton } from "react-social-login-buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitch } from "@fortawesome/free-brands-svg-icons";
import { createSvgIcon } from "react-social-login-buttons";

const Icon = (props) => <FontAwesomeIcon icon={faTwitch} />;
const config = {
  text: "Log in with Twitch",
  icon: Icon,
  iconFormat: (name) => `fa fa-${name}`,
  style: { background: "#6441a4" },
  activeStyle: { background: "#19171c" }
};
// /** My Facebook login button. */
// const MyFacebookLoginButton = createButton(config);

// export default MyFacebookLoginButton;
/** My Facebook login button. */
const TwitchLoginButton = createButton(config);

export default TwitchLoginButton;