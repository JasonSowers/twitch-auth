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
            await fetch("https://twitch-alexa-api.azurewebsites.net/api/login?code=YzU4HHx0x33ahMrjpvoLBvWh0113jO07BeuXjzWg7LENfd25ovc2HA==")
            .then((body) => {
              body.text().then((result) => {window.open(result, 'Authorize', ' scrollbars=yes,menubar=no,width=500, resizable=yes,toolbar=no,location=no,status=no')});              
            }) 
            .catch((err) => {
              console.log(err)
            })          


        }}/>
  </div>
      </header>
    </div>
  );
}


export default App;








