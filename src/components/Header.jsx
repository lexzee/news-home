import logo from '../assets/images/logo.svg'
import menuOpen from '../assets/images/icon-menu.svg'


const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="logo" />
      <img src={menuOpen} alt="" className="menu open" />
      <nav className="nav hidden">
          <li className="navitem">Home</li>
          <li className="navitem">New</li>
          <li className="navitem">Popular</li>
          <li className="navitem">Trending</li>
          <li className="navitem">Categories</li>
      </nav>
    </header>
  )
}

export default Header