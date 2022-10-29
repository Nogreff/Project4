import {createContext,useState,useEffect,useRef} from "react";

const DataContext = createContext({});
export const DataProvider=({children})=>{
    const [catFiltered,setCatFiltered]=useState([])
    const [catFilter,setCatFilter]=useState([])
    const [cardMin,setCardMin]=useState(0)
    const [cardMax,setCardMax]=useState(10)
    const [pageFocus,setPageFocus]=useState(null)
    const [pageTrack,setPageTrack]=useState(1)
    const [filterOrder,setFilterOrder]=useState(false)
    const page1=useRef();
    const page2=useRef();
    const page3=useRef();
    const page4=useRef();
    const page5=useRef();
    const page6=useRef();
    const page7=useRef();   
    const [latestPage,setLatestPage]=useState(null);
    const [childRef,setChildRef]=useState(false);
    const [adaptRef,setAdaptRef]=useState(false);
    const [affecRef,setAffecRef]=useState(false);
    const [dogfrRef,setDogfrRef]=useState(false);
    const [energRef,setEnergRef]=useState(false);
    const [groomRef,setGroomRef]=useState(false);
    const [healtRef,setHealtRef]=useState(false);
    const [intelRef,setIntelRef]=useState(false);
    const [sociaRef,setSociaRef]=useState(false);
    const [stranRef,setStranRef]=useState(false);
    const [vocalRef,setVocalRef]=useState(false);
    const [accordionBox,setAccordionBox]=useState([])
    const [sheddMin,setSheddMin]=useState()
    const [sheddMax,setSheddMax]=useState()
    const [sheddCheck,setSheddCheck]=useState(false)
    const listTrack=(track)=>{
      const navPage = document.getElementsByClassName('nav_page');
      setPageFocus(navPage[track-1])
      setPageTrack(track)
  if(latestPage===null){
      var setLatest=navPage[0]
  }else{
      var setLatest=latestPage
  }
  setCardMin(10*track-10)
  setCardMax(10*track)
  setCatFilter(catFiltered.slice(cardMin,cardMax))
  navPage[track-1].classList.add("focused")

  setLatest.classList.remove("focused")
  //setLatest.className=setLatest.className.substring(0,setLatest.className.lastIndexOf(" "))
  console.log(latestPage)
  setLatestPage(navPage[track-1])
  //setNavLive(true)
/*         if(track===2){
      page1.current.classList.value.add="focused"
      console.log(page2.current.classList.value)
  } */
  //console.log(pageOrder.current.classList.value.toLowerCase().includes("focused"))

}
  return (
    <DataContext.Provider value={{sheddCheck,setSheddCheck,sheddMax,setSheddMax,sheddMin,setSheddMin,setAdaptRef,setAffecRef,setDogfrRef,setEnergRef,setGroomRef,setHealtRef,setIntelRef,setSociaRef,setStranRef,setVocalRef,adaptRef,affecRef,dogfrRef,energRef,groomRef,healtRef,intelRef,sociaRef,stranRef,vocalRef,listTrack,accordionBox,setAccordionBox,setChildRef,setPageFocus,pageFocus,setPageTrack,pageTrack,latestPage,setLatestPage,page1,page2,page3,page4,page5,page6,page7,filterOrder,setFilterOrder,cardMax,setCardMax,cardMin,setCardMin,childRef,catFiltered,setCatFiltered,catFilter,setCatFilter}}>
        {children}
    </DataContext.Provider>
  )
}

export default DataContext