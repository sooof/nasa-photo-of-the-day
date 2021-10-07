import React, { useEffect, useState } from 'react'
import Pictures from "./Pictures";
import {BASE_URL, API_KEY} from './constants'
import "./App.css";
import axios from 'axios';


console.log(BASE_URL)
console.log(API_KEY)

function App() {
  const [pictures, setPictures] = useState([])
  // const [currentPicture, setCurrentPicture] = useState(null)

  useEffect(() => {
    // console.log(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`)
    axios.get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`)
      .then(res => {
       // console.log(res.data)
        setPictures(res.data);
      }).catch(err => console.error(err));
  }, [])
  
  // console.log(currentPicture)
  console.log(pictures)
  // pictures.map( (picture) => {
  //   console.log(picture['date'])
  // })

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      {
        <Pictures pictures={pictures} />
      }
    </div>
  );
}

export default App;
