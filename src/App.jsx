import { useState } from 'react'
import './App.scss'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import MobileMenu from './components/MobileMenu'
import { useEffect } from 'react'

function App() {
  const [clicked, setClicked] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const handleClick = ()=>{
    clicked == 0 ? setClicked(1) : setClicked(0)
  }

  useEffect(() => {
    const handleView= () => {
      setIsMobile(window.innerWidth < 780);
    };
    handleView();

    window.addEventListener('resize', handleView);
    return () => {
      window.removeEventListener('resize', handleView);
    }
  }, [])

  return (
    <div className='body'>
      <div className="App">
        <MobileMenu clicked={clicked} handleClick={handleClick} />
        <Header handleClick={handleClick} isMobile={isMobile} />
        <Main isMobile={isMobile} />
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
