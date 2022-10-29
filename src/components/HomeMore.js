import "../css/HomeMore.css"

function HomeMore() {
  return (
    <section className='home_more'>
      <div className='more_wrapper'>
        <div className='more_description'>
          <h1>ut venenatis</h1>
          <p>ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla</p>
          <a href="http://www.vetstreet.com/cats" target="_blank">See more</a>
        </div>
        <img src={require("../img/moreCat.png")}/>
      </div>
    </section>
  )
}

export default HomeMore