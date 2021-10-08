import React, { useEffect, useState } from 'react'
import Pictures from "./Pictures/Pictures";
import SearchBar  from './SearchBar/SearchBar';
import {BASE_URL, API_KEY} from './constants'
import "./App.css";
import axios from 'axios';


// console.log(BASE_URL)
// console.log(API_KEY)

function App() {
  const [pictures, setPictures] = useState([])
  const [searchState, setSearchState] = useState("");
  const [currentPictureId, setCurrentPictureId] = useState(null)

  const openDetails = id => {
    setCurrentPictureId(id)
  }
  const closeDetails = () => {
    setCurrentPictureId(null)
  }

  useEffect(() => {
    // console.log(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`)
    // console.log(`${BASE_URL}/planetary/apod?api_key=${API_KEY}&count=5`)
    // axios.get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`)
    axios.get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}&count=5`)
      .then(res => {
       // console.log(res.data)

       res.data.forEach( (picture, i) => {
        // console.log(i);
        picture.id =i
        // console.log(picture) 
      })

        setPictures(res.data);
      }).catch(err => console.error(err));
  }, [])
  // pictures.forEach( (picture, i) => {
  //   // console.log(i);
  //   picture.id =i
  //   // console.log(picture) 
  // })
  console.log(pictures)
  // console.log(currentPicture)
  //console.log(pictures)
  // pictures.map( (picture, i) => {
  //   console.log(i);
  //   // picture.id =i
  //   console.log(picture)
    
  // })
// pictures.forEach
const  Pic= props => (
  <div className='friend'>
    {props.info.date}
    {props.info.id}
    <button onClick={() => openDetails(props.info.id)}>
      See details
    </button>
  </div>
)
console.log(currentPictureId)
  return (
    <div className="App">
      {
         <SearchBar setSearchState={setSearchState}/>
      }
       <h1>Some of my friends:</h1>
       {pictures.length === 0 && <p>LOADING</p>}
       {
            pictures.map(fr => {
              //console.log(fr.id)
            return <Pic key={fr.id} info={fr} />
          })
       }
      {
        currentPictureId && <Pictures pictureId={currentPictureId} pictures={pictures} close={closeDetails} />
      }
    </div>
  );
}

export default App;
