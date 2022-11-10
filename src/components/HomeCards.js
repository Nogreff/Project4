import CatCard from "./CatCard"
import {useState,useEffect} from "react"
import "../css/HomeCards.css"

function HomeCards(props) {
  const {catData,mountCheck}=props;
  const [randomCat,setRandomCat]=useState([])
  const [randomCheck,setRandomCheck]=useState(false)
  var randomNum=[],cat0=-1,cat1=-1,cat2=-1,cat3=-1
  if(catData && randomNum.length<3){
    for(let x=0;x<4;x++){
      let validNum=false
      while(validNum===false){
        let randomValue=Math.floor(Math.random()*67);  
        if(randomValue!=cat0 && randomValue!=cat1 && randomValue!=cat2 && randomValue!=cat3){
          validNum=true
          switch(x){
            case 0:
              randomNum.push(Object.entries(catData)[randomValue])
              cat0=randomValue
              break;
            case 1:
              randomNum.push(Object.entries(catData)[randomValue])
              cat1=randomValue
              break;
            case 2:
              randomNum.push(Object.entries(catData)[randomValue])
              cat2=randomValue
              break;
            case 3:
              randomNum.push(Object.entries(catData)[randomValue])
              cat3=randomValue
              break;
          }
        
        }else{
          validNum=false
          console.log("dupe")
        }
      }
              
    }
  }
 useEffect(()=>{
  if(mountCheck==true && randomCheck==false){
    console.log(randomCheck)
    setRandomCat(randomNum)
    setRandomCheck(true)
  }
 },[mountCheck,randomCheck])
  return (
    <section className='home_card'>
      <h1>Over 60 breeds to discover</h1>
      <div className={'card_wrapper'}>
        
        {randomCat?randomCat.map((value,index)=>{
          return(<CatCard catPhoto={value[1].image!==undefined?value[1].image.url:require("../img/noimg(2).png")} catName={value[1].name} catInfo={value[1]}/>)
        }):null}     
      </div>
    </section>
  )
}

export default HomeCards