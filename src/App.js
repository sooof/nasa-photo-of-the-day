import React, { useEffect, useState } from 'react'
import Pictures from "./Pictures/Pictures";
import SearchBar  from './SearchBar/SearchBar';
import {BASE_URL, API_KEY} from './constants'
import "./App.css";
import axios from 'axios';


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
 
       res.data.forEach( (picture, i) => {
        picture.id =i+1
      })

        setPictures(res.data);
      }).catch(err => console.error(err));
  }, [])

  console.log(pictures)
  

const  Pic= props => (
  <div className='pictures'>
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
      <div className='container'>
        <h1>Some of NASA picture :</h1>
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
   
    </div>
  );
}

export default App;
