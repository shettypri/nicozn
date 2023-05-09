
import './App.css'
import Client from './Components/Client/Client'
import { Home } from './Components/First_page/Home'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import { Portfolio } from './Components/Portfolio/Portfolio'
import Service from './Components/Service/Service'
import Tech from './Components/Tech/Tech'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Service /> 
      <Portfolio /> 
      <Client />
      <Tech />
      <Footer /> 
    </>
  )
}

export default App
