import { useState } from 'react'
import './App.scss'
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <body>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
      <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="https://github.com/lexzee">Your Name Here</a>.
      </div>
    </body>
  )
}

export default App
