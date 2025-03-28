import { Link } from "react-router-dom"
import "./NavbarComponent.css"

const NavbarComponent = () => {
  const links = [
    { path: "/",          label: "CKX" },
    { path: "/demos", label: "Demos" },
    { path: "/exercises", label: "Exercices" },
    { path: "/about",     label: "About" },
    { path: "/contact",   label: "Contact" }
  ]

  const linksItem = links.map((item, index) => {
    return (
      <li key={index}>
        <Link to={item.path}>{item.label}</Link>
      </li>
    )
  })

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="navbar-list">
          {links.map((item, index) => (
            <li key={index} className="navbar-item">
              <Link to={item.path} className="navbar-link">{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default NavbarComponent