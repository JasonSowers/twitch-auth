import React from 'react'
import alexaLogo from './images/vertical_RGB_color_whitetext.png';
import twitchLogo from './images/TwitchExtrudedWordmarkPurple.png';
import './App.css';
import TwitchLoginButton from "./components/TwitchLoginButton.js";



function App() {

  var componentDidMount = () => {
    if (window.location.hash){console.log("loaded!");}
    fetch("https://pitangui.amazon.com/spa/skill/account-linking-status.html?vendorId=MV7KPZEZZT1ZT"+window.location.hash)
  }

  componentDidMount();
  return (
    <div className="App">
      <header className="App-header">
      <img src={twitchLogo} className="App-logo" alt="logo" /> 
      <img src={alexaLogo} className="App-logo" alt="logo" />
        

        <div>
        <TwitchLoginButton onClick={async () => {
      //let newQuery = '?response_type=token&client_id=yk5uzy4lrvp5e1qu06jdixycx5jx3f&redirect_uri=https://twitch-alexa-api.azurewebsites.net/api/authCallback&scope=viewing_activity_read';
       let redirectUrl = getParameterByName("redirect_uri"); 
        let newQuery = window.location.query.replace(redirectUrl, "https://twitch-alexa-api.azurewebsites.net/api/authCallback")       
       window.open("https://id.twitch.tv/oauth2/authorize" + newQuery, 'Authorize', ' scrollbars=yes,menubar=no,width=500, resizable=yes,toolbar=no,location=no,status=no')

        }}/>
  </div>
      </header>
    </div>
  );


      }
export default App;









