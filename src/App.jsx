import './App.css'
import Dasborad from './components/Dasborad/Dasborad'
import NavBar from './components/NavBar/NavBar'
import PhoneBar from './components/PhoneBar/PhoneBar'
import PriceList from './components/PriceList/PriceList'

function App() {


  return (
    <div className="App">
      <NavBar/>
      <PriceList/>
      <Dasborad/>
      <PhoneBar></PhoneBar>
    </div>
  )
}

export default App
