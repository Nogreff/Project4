import "../css/Header.css"
import {useNavigate} from "react-router-dom"

function Header() {
  const navigate=useNavigate();
  return (
    <header>
      <img src={require("../img/svg-gobbler(27).svg").default} onClick={()=>navigate("/")}/>
    </header>
  )
}

export default Header