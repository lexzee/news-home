import menuClose from '../assets/images/icon-menu-close.svg'

const MobileMenu = () => {
  return (
    <nav className="nav hidden">
      <img src={menuClose} alt="" className="menu close" />
        <li className="navitem one">Home</li>
        <li className="navitem 2">New</li>
        <li className="navitem 3">Popular</li>
        <li className="navitem 4">Trending</li>
        <li className="navitem 5">Categories</li>
    </nav>
  )
}

export default MobileMenu