import {useState,useEffect} from "react"
import "../css/DescriptionPhoto.css"

function DescriptionPhoto(props) {
  const {photo,mountCheck}=props;
  const [photos,setPhotos]=useState([])
  const [photos1,setPhotos1]=useState("")
  useEffect(()=>{
    if(photo!=photos){
      setPhotos(photo)
    }
  },[photo])
  
  return (
    <div className="description_photo">  
      <h2>Gallery</h2>
      <div className="photo_container">
        {photos.map((value,index)=>{
         return(
            <img src={value.url}/>
          )
        })}
      </div>
    </div>
  )
}

export default DescriptionPhoto