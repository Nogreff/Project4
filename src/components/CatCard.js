import "../css/CatCard.css"
import {useNavigate} from "react-router-dom"
function CatCard(props) {
  const navigate=useNavigate();
  const {catPhoto,catName,catInfo}=props;
  return (
    <div className='cat_card' onClick={()=>navigate("/Description",{state:{catDescription:catInfo}})}>
      <img src={catPhoto}/>
      <label>{catName}</label>
    </div>
  )
}

export default CatCard