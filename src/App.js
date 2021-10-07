import React from "react";
import Pictures from "./Pictures";
import {BASE_URL, API_KEY} from './constants'
import "./App.css";
// import axios from 'axios';
// export const BASE_URL = 'https://api.nasa.gov';
// export const API_KEY = 'rbKSdCBqYa49RiyHPrJwq6sWw4XmQG7jkgyjOqMh'
//https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=5
//https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
//// console.log(`${BASE_URL}/planetary/apod?api_key=${API_KEY}&count=5`)
console.log(BASE_URL)
console.log(API_KEY)

// function Pictures(props) {
//   // console.log(pictures)
//   return <div>1
//      {/* {props.pictures.map((picture) => <li > {picture['date']} </li>)}
//      {props.pictures.map((picture) => <img alt='nasa pictures' src={picture['hdurl']} />)} */}
//   </div>
// }
function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      {
        <Pictures />
      }
    </div>
  );
}

export default App;
