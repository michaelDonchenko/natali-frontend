import React from "react"

const Footer = () => {
  return (
    <footer>
      <h4 style={{ color: "white" }}>
        Copyright &copy; {new Date().getFullYear()}{" "}
        <span>Michael Donchenko</span> all rights reserve
      </h4>

      <a
        className="navigation-link"
        style={{ color: "white", textDecoration: "none" }}
        href="https://michael-dev.com"
      >
        michael-dev.com
      </a>
    </footer>
  )
}

export default Footer
