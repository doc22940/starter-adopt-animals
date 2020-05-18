import React from "react"
import { Link } from "gatsby"
import { window } from "browser-monads"
import logo from "../../images/compass-logo.svg"
import "./navStyles.css"

const Nav = () => {
  return (
    <nav>
      <div className="nav__items">
        <a className="nav__item--left" href="/">
          <img src={logo} className="nav__item--logo" alt="Logo" />
        </a>
        <Link
          to="/animals/all"
          className={
            window.location.href.indexOf("animals/all") > 0 ||
            window.location.href.indexOf("category") > 0
              ? "nav__item--link active"
              : "nav__item--link"
          }
        >
          Home
        </Link>
        <Link
          to="/AddPet"
          className={
            window.location.href.indexOf("AddPet") > 0
              ? "nav__item--link active"
              : "nav__item--link"
          }
        >
          Add Pet
        </Link>
        <Link
          to="/aboutus"
          className={
            window.location.href.indexOf("aboutus") > 0
              ? "nav__item--link active"
              : "nav__item--link"
          }
        >
          About Us
        </Link>
        <Link
          to="/Contact"
          className={
            window.location.href.indexOf("Contact") > 0
              ? "nav__item--link active"
              : "nav__item--link"
          }
        >
          Contact
        </Link>
        <Link
          to="/login"
          className={
            window.location.href.indexOf("login") > 0
              ? "nav__item--link active"
              : "nav__item--link"
          }
        >
          Login
        </Link>
      </div>
    </nav>
  )
}

export default Nav
