import './App.css'
import NavBarra from './components/NavBar/NavBarra.jsx'
import Home from './components/Home/Home.jsx'
import Rodape from './components/Footer/Rodape.jsx'
import Banner from './components/Banner/Banner.jsx'


function App() {

  return (
    <>
    <div className="app">

    <NavBarra/>
    <Banner/>
    <Home/>
    <Rodape/>
  
    </div>
    </>
  )
}

export default App
