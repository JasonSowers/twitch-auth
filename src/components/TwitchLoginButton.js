import React from "react";
import { createButton } from "react-social-login-buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitch } from "@fortawesome/free-brands-svg-icons";

const Icon = (props) => <FontAwesomeIcon icon={faTwitch} />;
const config = {
  text: "Log in with Twitch",
  icon: Icon,
  iconFormat: (name) => `fa fa-${name}`,
  style: { background: "#6441a4" },
  activeStyle: { background: "#19171c" }
};

const TwitchLoginButton = createButton(config);

export default TwitchLoginButton;