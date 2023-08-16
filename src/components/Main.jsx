import heroMobile from '../assets/images/image-web-3-mobile.jpg'
import heroDesktop from '../assets/images/image-web-3-desktop.jpg'

const Main = () => {
  return (
    <main className="main">
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
    </main>
  )
}

export default Main