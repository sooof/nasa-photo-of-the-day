import React, { useState }  from "react";
import Picture from  "./Picture";
import "./Pictures.css";


// function Picture(props) {

//   return <h1>eee1  </h1>
// }



function Pictures(props) {
  // const { likePost, pictureId } = props;
  //console.log(props.pictures)

  const { likePost, pictures } = props;
  const { pictureId, close } = props

  const [cPicture, setCPicture] = useState(null)
  const aa = props.pictures.filter( item => item.id == pictureId);
  // setCPicture(aa)

  console.log("2222   "+pictureId+ " cPicture"+ aa)


  // console.log( props.pictures.filter( item => item.id == pictureId) )

  return <div className='pictures-container-wrapper'>
      <h2>Details (of friend with id {pictureId}):</h2>

      {
        pictures.map( (picture, i) => {
          //  return <h1>eee1  </h1>
          return  pictureId==i && <Picture 
                    pictureId={pictureId}
                    picture = {picture}
                  />
        })
      }
    
  </div>
}
export default Pictures;
