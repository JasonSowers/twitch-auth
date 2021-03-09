import React from 'react'
import alexaLogo from './images/vertical_RGB_color_whitetext.png';
import twitchLogo from './images/TwitchExtrudedWordmarkPurple.png';
import './App.css';
import TwitchLoginButton from "./components/TwitchLoginButton.js";
import { isCompositeComponent } from 'react-dom/test-utils';



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={twitchLogo} className="App-logo" alt="logo" /> 
      <img src={alexaLogo} className="App-logo" alt="logo" />
        

        <div>
        <TwitchLoginButton onClick={() => {
          fetch("https://twitch-alexa-api.azurewebsites.net/login")
          .then((response) =>{console.log(response)})
        }}/>
  </div>
      </header>
    </div>
  );
}


export default App;








