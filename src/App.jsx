import { useState } from 'react'
import logo from './assets/images/logo.svg'
import heroMobile from './assets/images/image-web-3-mobile.jpg'
import heroDesktop from './assets/images/image-web-3-desktop.jpg'
import retro from './assets/images/image-retro-pcs.jpg'
import laptop from './assets/images/image-top-laptops.jpg'
import gaming from './assets/images/image-gaming-growth.jpg'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">
      <div className="header">
        <img src={logo} alt="logo" className="logo" />
        <nav className="nav">
          <li className="navitem">Home</li>
          <li className="navitem">New</li>
          <li className="navitem">Popular</li>
          <li className="navitem">Trending</li>
          <li className="navitem">Categories</li>
        </nav>
      </div>
      <div className="main">
        <img src={heroMobile} alt="banner image" className="hero" />
        <h1 className="heading">
          The Bright Future of Web 3.0?
        </h1>
        <div className="desc">
          <p>
            We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.But is it really fulfilling its promise?
          </p>
          <button>Read More</button>
        </div>
      </div>
      <div className="new">
        <h2>New</h2>
        <div className="news">
          <h3>Hydrogen VS Electric Cars</h3>
          <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
        </div>
        <div className="news">
          <h3>The Downsides of AI Artistry</h3>
          <p>What are the possible adverse effects of on-demand AI image generation?</p>
        </div>
        <div className="news">
          <h3>Is VC Funding Drying Up?</h3>
          <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
        </div>
      </div>
      <div className="footer">
        <div className="footNews">
          <img src={retro} alt="Retro PCs" />
          <div className="desc">
            <h1>01</h1>
            <p className="title">Reviving Retro PCs</p>
            <p className="details">What happens when old PCs are given modern upgrades?</p>
          </div>
        </div>
        <div className="footNews">
          <img src={laptop} alt="Retro PCs" />
          <div className="desc">
            <h1>02</h1>
            <p className="title">Top 10 Laptops of 2022</p>
            <p className="details">Our best picks for various needs and budgets.</p>
          </div>
        </div>
        <div className="footNews">
          <img src={gaming} alt="Laptops" />
          <div className="desc">
            <h1>03</h1>
            <p className="title">The Growth of Gaming</p>
            <p className="details">How the pandemic has sparked fresh opportunities.</p>
          </div>
        </div>
      </div>
    </div>
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Your Name Here</a>.
      </div>
    </>
  )
}

export default App
