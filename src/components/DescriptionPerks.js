import "../css/DescriptionPerks.css"

function DescriptionPerks(props) {
  const {catPerk}=props;
  var uncolored={background: "white"}
  var colored={background: "green"}
  var perk1=uncolored,perk2=uncolored,perk3=uncolored,perk4=uncolored,perk5=uncolored
  if(catPerk>0){
    perk1=colored
  }
  if(catPerk>1){
    perk2=colored
  }
  if(catPerk>2){
    perk3=colored
  }
  if(catPerk>3){
    perk4=colored
  }
  if(catPerk>4){
    perk5=colored
  }
  return (
    <ul className='description_perks'>
      <li id="perk_1" style={perk1}></li>
      <li id="perk_1" style={perk2}></li>
      <li id="perk_1" style={perk3}></li>
      <li id="perk_1" style={perk4}></li>
      <li id="perk_1" style={perk5}></li>
    </ul>
  )
}

export default DescriptionPerks