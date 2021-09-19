import React from "react"
import links from "../utils/links"
import { Link } from "gatsby"
import { FaTimes } from "react-icons/fa"
const Sidebar = ({ open, toggleOpen }) => {
  return (
    <aside className={open ? "sidebar show-sidebar" : "sidebar"}>
      <button className="close-btn" onClick={toggleOpen}>
        <FaTimes />
      </button>

      <div className="side-contaier">
        <ul className={open ? "sidebar-links" : null}>
          {links.map(link => {
            return (
              <li onClick={toggleOpen} key={link.id}>
                <Link to={link.url}>{link.text}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
