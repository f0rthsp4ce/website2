import React from "react"
import { Link } from "gatsby"
import logo from "../images/icons/android-chrome-192x192.png"
import "./style.css"

const Header = () => {
  return (
    <header>
      <img src={logo} className="logo" alt="logo" />
      <nav>
        <Link to="/" activeClassName="header-link-active">MAIN</Link>
        <Link className="link-light" to="/artwork" activeClassName="header-link-light-active">PROJECTS</Link>
        <Link className="link-dark" to="/development" activeClassName="header-link-dark-active">SPACE</Link>
        <Link to="/contacts" activeClassName="header-link-active">CONTACTS</Link>
      </nav>
    </header>
  )
}

export default Header