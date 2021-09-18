import React from "react"
import { Link } from "gatsby"
import links from "../utils/links"
import { useStaticQuery, graphql } from "gatsby"
import { RiMenu3Fill } from "react-icons/ri"

const Navbar = () => {
  const activeStyle = {
    color: "hsl(0, 37%, 76%)",
  }

  const { allStrapiCategory: data } = useStaticQuery(graphql`
    {
      allStrapiCategory {
        nodes {
          title
          strapiId
        }
      }
    }
  `)

  return (
    <nav>
      <div className="nav-center">
        <button type="button" className="toggle-btn">
          <RiMenu3Fill />
        </button>
        <div className="nav-links">
          {links.map(link => (
            <span key={link.id} className="dropdown">
              <Link
                activeStyle={activeStyle}
                className="nav-link"
                to={link.url}
              >
                {link.text}
              </Link>

              {link.text === "מתכונים" && (
                <ul className="dropdown-content">
                  {data?.nodes.map(node => (
                    <li key={node.strapiId}>
                      <Link
                        className="dropdown-link"
                        to={`/category/${node.strapiId}`}
                      >
                        {node.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </span>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
