import React from "react";
// import "./App.css";

function Pictures(props) {
  console.log(props.pictures)
  return <div>1
      <img alt='nasa pictures' src={props.pictures['hdurl']} />
     {/* {props.pictures.map((picture) => <li > {picture['date']} </li>)}
     {props.pictures.map((picture) => <img alt='nasa pictures' src={picture['hdurl']} />)} */}
  </div>
}
export default Pictures;
