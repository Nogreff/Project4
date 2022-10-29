import HomeSearch from "./HomeSearch"
import HomeCards from "./HomeCards"
import HomeMore from "./HomeMore"

function Home(props) {
  const {catData,mountCheck}=props;
  return (
    <div>
      <HomeSearch catData={catData}/>
      <HomeCards catData={catData} mountCheck={mountCheck}/>
      <HomeMore/>
    </div>
  )
}

export default Home