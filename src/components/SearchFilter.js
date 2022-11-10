import {useRef,useEffect,useState,useLayoutEffect} from "react"
import "../css/SearchFilter.css"
import {useContext} from "react"
import DataContext from "../context/DataContext";
function SearchFilter(props) {
  const {cats,setCatFiltered,setFilterOrder,catOrder}=props;
  const {sheddCheck,setSheddCheck,sheddMax,setSheddMax,sheddMin,setSheddMin,setAdaptRef,setAffecRef,setDogfrRef,setEnergRef,setGroomRef,setHealtRef,setIntelRef,setSociaRef,setStranRef,setVocalRef,adaptRef,affecRef,dogfrRef,energRef,groomRef,healtRef,intelRef,sociaRef,stranRef,vocalRef,catFilter,cardMin,cardMax,catFiltered,listTrack,setCardMin,setCardMax,accordionBox,setAccordionBox,childRef,setChildRef}=useContext(DataContext)
/*   console.log(Object.keys(cats[0])[28])
  if("rex".toLowerCase().includes(Object.keys(cats[0])[31].toLowerCase())){
    console.log("same string")
  }else{
    console.log("nope")
  } */
  

/*     if(childRef){
      childRef.current.checked=true
      console.log("workd")
      console.log(childRef.current.checked)
    } */


  //const sheddRef=useRef();

  const primaryNav=useRef();
  const navToggle=useRef();
  const [accSelect,setAccSelect]=useState(null);
  const checker =()=>{
      let catsToFilter=cats
/*     adaptRef.current.checked&& perksum + cats[0].adaptRef.current.value
    affecRef.current.checked&& perkSum + cats[0].adaptRef.current.value */
      setChildRef(document.querySelector(".chi_fri").checked)
      setAdaptRef(document.querySelector(".adapt").checked)
      setAffecRef(document.querySelector(".aff_lev").checked)
      setDogfrRef(document.querySelector(".dog_fri").checked)
      setEnergRef(document.querySelector(".ene_lev").checked)
      setGroomRef(document.querySelector(".groom").checked)
      setHealtRef(document.querySelector(".hea_iss").checked)
      setIntelRef(document.querySelector(".intel").checked)
      setSociaRef(document.querySelector(".soc_nee").checked)
      setStranRef(document.querySelector(".str_fri").checked)
      setVocalRef(document.querySelector(".vocal").checked)
    catsToFilter = cats.slice().sort(function(a,b){
      let catA=0,catB=0
      if(adaptRef===true){catA= catA + a.adaptability; catB=catB + b.adaptability}
      if(affecRef===true){catA= catA + a.affection_level; catB= catB + b.affection_level}
      if(childRef===true){catA= catA + a.child_friendly; catB= catB + b.child_friendly}
      if(dogfrRef===true){catA= catA + a.dog_friendly; catB= catB + b.dog_friendly}
      if(energRef===true){catA= catA + a.energy_level; catB= catB + b.energy_level}
      if(groomRef===true){catA= catA + a.grooming; catB= catB + b.grooming}
      if(healtRef===true){catA= catA + a.health_issues; catB= catB + b.health_issues}
      if(intelRef===true){catA= catA + a.intelligence; catB= catB + b.intelligence}
      if(sheddMin && sheddMin.className==="shedd_low shedd_selected"){catA= catA - a.shedding_level;catB= catB - b.shedding_level;setSheddCheck(true)}
      if(sheddMax && sheddMax.className==="shedd_high shedd_selected"){catA= catA + a.shedding_level; catB= catB + b.shedding_level;setSheddCheck(true)}
      if(sociaRef===true){catA= catA + a.social_needs; catB= catB + b.social_needs}
      if(stranRef===true){catA= catA + a.stranger_friendly; catB= catB + b.stranger_friendly}
      if(vocalRef===true){catA= catA + a.vocalisation; catB= catB + b.vocalisation}
      if(catA===catB){
        return 0
      }
      if(catA<catB){
        return 1
      }
      return -1
      
    })
    setCardMax(10)
    setCardMin(0)
    if(cardMin!==0){
      listTrack(1)
    }
    setCatFiltered(catsToFilter)
  }
  const resetCheck=()=>{
    if(catFiltered!==cats || cardMin!==0){
      let catReset=cats;

    setChildRef(false)
    setAdaptRef(false)
    setAffecRef(false)
    setDogfrRef(false)
    setEnergRef(false)
    setGroomRef(false)
    setHealtRef(false)
    setIntelRef(false)
    setSociaRef(false)
    setStranRef(false)
    setVocalRef(false)
    document.querySelector(".chi_fri").checked=false
    document.querySelector(".adapt").checked=false
   document.querySelector(".aff_lev").checked=false
   document.querySelector(".dog_fri").checked=false
   document.querySelector(".ene_lev").checked=false
   document.querySelector(".groom").checked=false
   document.querySelector(".hea_iss").checked=false
   document.querySelector(".intel").checked=false
   document.querySelector(".soc_nee").checked=false 
   document.querySelector(".str_fri").checked=false
   document.querySelector(".vocal").checked=false
   document.querySelector(".shedd_low").classList.value="shedd_low shedd_selected"
   document.querySelector(".shedd_high").classList.value="shedd_high"
   setSheddCheck(false)
    setCardMax(10)
    setCardMin(0)
    //catOrder.current.value=""
    setFilterOrder(false)
    setCatFiltered(catReset)
    const filtAccordion=document.getElementsByClassName("accordion_box")
    for(let i=0;i<filtAccordion.length;i++){
      filtAccordion[i].classList.remove("active")
    }
    if(cardMin!==0){
      listTrack(1)
    }
    console.log(catReset)
    console.log("reset'd")
    }

  }
  const menuToggle=()=>{
    const menuVisibility=primaryNav.current.getAttribute("data-visible")
    if(menuVisibility==="false"){
      primaryNav.current.setAttribute("data-visible",true);
      navToggle.current.setAttribute("aria-expanded",true)
    }else if(menuVisibility==="true"){
      primaryNav.current.setAttribute("data-visible",false);
      navToggle.current.setAttribute("aria-expanded",false)
    }
  }
/*   const filtAccordion=document.getElementsByClassName("accordion_box")
  console.log("")
  useEffect(()=>{
    
    let setAccordion=filtAccordion
    console.log(setAccordion)
    for(let i=0;i<setAccordion.length;i++){
      setAccordion[i].addEventListener("click",function(){
        setAccordion[i].classList.toggle("active")
        setAccordion[i].children[0].classList.toggle("active")
        setAccordionBox(setAccordion)
          console.log("toggled")
         if(setAccordion[i].className!==filtAccordion[i].className){
          setAccordion[i].classList.toggle("active")
         
          console.log("here")
        }
        if(setAccordion[i].className===filtAccordion[i].className){
          setAccordion[i].classList.toggle("active")
        }        
      })
    }
  }) */

  const accordionToggle=(e,x)=>{
    //console.log(e.target.offsetParent.classList.value)
    if(e.target.offsetParent.classList.value!=="option_list"){   
      let selectBox=accordionBox
      e.currentTarget.classList.toggle("active")
      selectBox[x]=e.currentTarget
      setAccordionBox(selectBox)
      setAccSelect(x)
      console.log(accordionBox)
    }   
  }
  
  useEffect(()=>{
    if(accordionBox && accordionBox.length>0){
      console.log(accordionBox)
      if(accSelect===null){
        let x=accordionBox
        const filtAccordion=document.getElementsByClassName("accordion_box")
        for(let i=0;i<filtAccordion.length;i++){
          if(accordionBox[i]){
            filtAccordion[i].className=accordionBox[i].className
          }      
        }
     
      }
    }

  },[accordionBox])
  useEffect(()=>{
    if(sheddCheck===true){
      document.querySelector(".shedd_low").classList.value=sheddMin.classList.value
      document.querySelector(".shedd_high").classList.value=sheddMax.classList.value
    }
  },[sheddCheck])
  const menuRange=(shedd)=>{
    console.log(document.querySelector(".shedd_low"))
    if(shedd.target.className==="shedd_low"){
      document.querySelector(".shedd_low").classList.add("shedd_selected")
      document.querySelector(".shedd_high").classList.remove("shedd_selected")
      setSheddMax( document.querySelector(".shedd_high"))
      setSheddMin(document.querySelector(".shedd_low"))
    }else if(shedd.target.className==="shedd_high"){
      document.querySelector(".shedd_high").classList.add("shedd_selected")
      document.querySelector(".shedd_low").classList.remove("shedd_selected")
      setSheddMax( document.querySelector(".shedd_high"))
      setSheddMin(document.querySelector(".shedd_low"))
    }
  }
  if(document.querySelector(".chi_fri") && childRef===true){
    document.querySelector(".chi_fri").checked=true
  }
 if(document.querySelector(".adapt") && adaptRef===true){
  document.querySelector(".adapt").checked=true
 }
 if(document.querySelector(".aff_lev") && affecRef===true){
  document.querySelector(".aff_lev").checked=true
 }
 if(document.querySelector(".dog_fri") && dogfrRef===true){
  document.querySelector(".dog_fri").checked=true
 }
 if(document.querySelector(".ene_lev") && energRef===true){
  document.querySelector(".ene_lev").checked=true
 }
 if(document.querySelector(".groom") && groomRef===true){
  document.querySelector(".groom").checked=true
 }
 if(document.querySelector(".hea_iss") && healtRef===true){
  document.querySelector(".hea_iss").checked=true
 }
 if(document.querySelector(".intel") && intelRef===true){
  document.querySelector(".intel").checked=true
 }
 if(document.querySelector(".soc_nee") && sociaRef===true){
  document.querySelector(".soc_nee").checked=true
 }
 if(document.querySelector(".str_fri") && stranRef===true){
  document.querySelector(".str_fri").checked=true
 }
 if(document.querySelector(".vocal") && vocalRef===true){
  document.querySelector(".vocal").checked=true
 }

            
  return (
    <div className="filter_wrapper">
      <button ref={navToggle} className="mobile_toggle" aria-controls="filter_list" aria-expanded="false" onClick={()=>menuToggle()}></button>
      <div ref={primaryNav} className="filter_container filter_menu" data-visible="false">
        <div className="accordion_box" onClick={e=>accordionToggle(e,0)}>
          <div className="box_label">
            <h3>Good with</h3>
          </div>
          <div className="option_list">
            <div className="check_wrapper dog_friendly"><input type="checkbox" className="dog_fri" value="dog_friendly"/></div>
            <div className="check_wrapper child_friendly"><input type="checkbox" className="chi_fri" value="child_friendly"/></div>
            <div className="check_wrapper stranger_friendly"><input type="checkbox" className="str_fri" value="stranger_friendly"/></div>
          </div>
        </div>
        <div className="accordion_box" onClick={e=>accordionToggle(e,1)}>
          <div className="box_label">
            <h3>Activity level</h3>
          </div>
          <div className="option_list">
             <div className="check_wrapper energy_level"><input type="checkbox" className="ene_lev" value="energy_level"/></div>
             <div className="check_wrapper social_needs"><input type="checkbox" className="soc_nee" value="social_needs"/></div>
             <div className="check_wrapper affection_level"><input type="checkbox" className="aff_lev" value="affection_level"/></div>
          </div>
        </div>
        <div className="accordion_box" onClick={e=>accordionToggle(e,2)}>
          <div className="box_label">
            <h3>Shedding level</h3>
          </div>
          <div className="option_list">
            <div className="check_wrapper shedding_level">
              <ul>
                <li  className="shedd_low shedd_selected" onClick={e=>menuRange(e)}>LOW</li>
                <li  className="shedd_high" onClick={e=>menuRange(e)}>HIGH</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion_box" onClick={e=>accordionToggle(e,3)}>
          <div className="box_label">
            <h3>Others</h3>
          </div>
          <div className="option_list">
             <div className="check_wrapper adaptability"><input type="checkbox" className="adapt" value="adaptability"/></div>
             <div className="check_wrapper grooming"><input type="checkbox" className="groom" value="grooming"/></div>
             <div className="check_wrapper health_issues"><input type="checkbox" className="hea_iss" value="health_issues"/></div>
             <div className="check_wrapper intelligence"><input type="checkbox" className="intel" value="intelligence"/></div>
             <div className="check_wrapper vocalisation"><input type="checkbox" className="vocal" value="vocalisation"/></div>
          </div>
        </div>
        <ul className="filter_btns">
          <li className="btn_filter" onClick={()=>{checker();menuToggle()}} >Search</li>
          <li className="btn_reset" onClick={()=>{resetCheck();menuToggle()}}>Reset</li>
        </ul>
      </div>
    </div>
  )
}

export default SearchFilter