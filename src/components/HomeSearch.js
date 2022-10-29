import "../css/HomeSearch.css"
import {useState,useEffect,useRef} from "react"
import {useNavigate} from "react-router-dom"

function HomeSearch(props) {
  const {catData}=props;
  const [filteredData,setFilteredData]=useState([])
  const [nameEntered,setNameEntered]=useState("")
  const focusRef=useRef();
  const catOptions =document.querySelector(".cat_options")
  const navigate=useNavigate();
  const catFilter=(catName)=>{
    setNameEntered(catName)
    console.log(catName)
    const filteredCat= Object.entries(catData).filter((value)=>{
      return value[1].name.toLowerCase().includes(catName.toLowerCase())
    })
    if(nameEntered===""){
      setFilteredData([])
    }else{
      setFilteredData(filteredCat)
    }


  }
  const choosedCat=(cat)=>{
    console.log("here here")
    console.log(cat)
    navigate("/Description",{state:{catDescription:cat}})
  }
  useEffect(()=>{
    if(catOptions){
      if(nameEntered.length>1 &&filteredData.length>0){
        catOptions.classList.add("show")
      }else{
        catOptions.classList.remove("show")
      }
    }

  },[nameEntered])
  const focusSearch=(inputFocus)=>{
    if(inputFocus===true){  
      focusRef.current.classList.add("focus_search")
     }else if(inputFocus===false){  
      setTimeout(() => {       
       focusRef.current.value=""
       setFilteredData([])
       focusRef.current.classList.remove("focus_search")
      }, 100);
     }
     console.log(inputFocus)
  }
  console.log(focusRef)
  return (
    <section className='home_search'> 
      <h1>Tellus orci</h1>
      <p>placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum</p> 
      <div className='search_wrapper'>
        <div className="search_options">
          <input type="text" ref={focusRef} onBlur={()=>focusSearch(false)} onFocus={()=>focusSearch(true)} onChange={e=>catFilter(e.target.value)} className="cat_searcher"/>
          <a className="btn_adv_search" onClick={()=>navigate("/SearchCat",{state:{catData:catData}})}>Advanced search</a> 
        </div>      
        <div className="cat_options">
        {
          filteredData!=null?
          filteredData.map((catValue,index)=>{
            return(
              <a onClick={()=>choosedCat(catValue[1])}>{catValue[1].name}</a>
            )
          })
        :null}
        </div>
      </div>
         
    </section>
  )
}

export default HomeSearch