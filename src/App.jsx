import './App.css'
import NavBarra from './components/NavBar/NavBarra.jsx'
import Principal from './components/Main/Principal.jsx'
import Rodape from './components/Footer/Rodape.jsx'
import Banner from './components/Banner/Banner.jsx'


function App() {

  return (
    <>
    <div className="app">

    <NavBarra/>
    <Banner/>
  
    <Principal/>
    <Rodape/>
  
    </div>
    </>
  )
}

export default App
