import {Component} from "react"
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Description from "./components/Description"
import SearchCat from "./components/SearchCat"
import {DataProvider} from "./context/DataContext"
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"

class App extends Component {
  state={
    cats:[],
    photos:[],
    mountCheck:false
  }
  apiRequest=()=>{
    const url="https://api.thecatapi.com/v1/breeds"
    fetch(url).then(response=>response.json()).then(data=>{
      this.setState(data);
      this.state.cats=data
      console.log(data)
    })
  }
  photoRequest=(id)=>{
    const url="https://api.thecatapi.com/v1/images/search?breed_ids="+id+"&limit=10&api_key=live_OkwGbgb6LHpxMKxzK2LliZyGcz49sTwVpR0EoSAKdzFbZhyZB5Zp3zZJAt73Zr3O"
    fetch(url).then(response=>response.json()).then(data=>{
      this.setState(data);
      this.state.photos=data
    })
  }
  componentDidMount(){
    this.apiRequest();
    console.log("component did mount")
    this.state.mountCheck=true;
  }
  render(){
    return (
      <div className="App">
        <Router>
          <Header/>
          <DataProvider>
            <Routes>
              <Route path="/" element={<Home catData={this.state.cats} mountCheck={this.state.mountCheck}/>}/>
              <Route path="/Description" element={<Description photoRequest={this.photoRequest} catPhotos={this.state.photos} mountCheck={this.state.mountCheck}/>}/>
              <Route path="/SearchCat" element={<SearchCat/>}/>
            </Routes>
          </DataProvider>
          <Footer/>
        </Router>
      </div>
    );
  }

}

export default App;
