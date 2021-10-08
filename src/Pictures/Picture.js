import React, { useEffect, useState } from 'react'

// function Picture(props) {

//     return <h1>eee1  </h1>
//   }

function Picture(props) {
    const { pictureId, close } = props
    const [details, setDetails] = useState(null)
    console.log("#####  "+ pictureId);
// console.log("#####"+props.pictureId);
    // useEffect(() => {
    //     setDetails(res.data);
    //   },[pictureId])
// console.log( props.picture.filter( item => {item.id == pictureId}) )

  //console.log(props.picture)
  return <div className='pictures-border'>
    
        <h1>NASA picture Date : {props.picture.date} hhh {props.picture.id}</h1>
        {
            //  props.picture.filter( item => {item.id == 'pictureId'})
        }
        {        
        
        <>  
            {/* <h1> {props.picture.copyright} </h1> */}
            {/* thumbnailUrl={post.thumbnailUrl} */}
            <img className='pictures-image' alt='nasa pictures' src={props.picture['hdurl']} />
        </>
        }
      
    
      
     {/* {props.pictures.map((picture) => <li > {picture['date']} </li>)} */}
     {/* {props.pictures.map((picture) => <img alt='nasa pictures' src={picture['hdurl']} />) } */}
  </div>
}
export default Picture;