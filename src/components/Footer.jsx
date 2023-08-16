import retro from '../assets/images/image-retro-pcs.jpg'
import laptop from '../assets/images/image-top-laptops.jpg'
import gaming from '../assets/images/image-gaming-growth.jpg'

const Footer = () => {
  return (
    <footer>
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
    </footer>
  )
}

export default Footer