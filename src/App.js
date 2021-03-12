import React from 'react'
import alexaLogo from './images/vertical_RGB_color_whitetext.png';
import twitchLogo from './images/TwitchExtrudedWordmarkPurple.png';
import './App.css';
import TwitchLoginButton from "./components/TwitchLoginButton.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={twitchLogo} className="App-logo" alt="logo" /> 
      <img src={alexaLogo} className="App-logo" alt="logo" />
        

        <div>
        <TwitchLoginButton onClick={async () => {
       let params = (new URL(document.location)).searchParams;
       window.open("https://id.twitch.tv/oauth2/authorize" + window.location.query, 'Authorize', ' scrollbars=yes,menubar=no,width=500, resizable=yes,toolbar=no,location=no,status=no')

        }}/>
  </div>
      </header>
    </div>
  );
}


export default App;








