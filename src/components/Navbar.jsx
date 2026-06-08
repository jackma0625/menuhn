import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        MenuStudio
      </div>

      <div className="nav-links">
        <a href="#">Templates</a>
        <a href="#">Pricing</a>
        <a href="#">Contact</a>
      </div>

    </nav>
  )
}