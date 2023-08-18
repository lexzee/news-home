import { useState } from 'react'
import './App.scss'
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'
import MobileMenu from './components/MobileMenu'

function App() {
  const [clicked, setClicked] = useState(0)
  const handleClick = ()=>{
    clicked == 0 ? setClicked(1) : setClicked(0)
  }

  return (
    <div className='body'>
      <div className="App">
        <MobileMenu clicked={clicked} handleClick={handleClick} />
        <Header handleClick={handleClick} />
        <Main />
        <Footer />
      </div>
      <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="https://github.com/lexzee">Lexzee</a>.
      </div>
    </div>
  )
}

export default App
