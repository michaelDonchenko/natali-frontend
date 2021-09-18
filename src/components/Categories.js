import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const Categories = () => {
  const { allStrapiCategory } = useStaticQuery(graphql`
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
    <div className="categories">
      {allStrapiCategory.nodes.map(node => (
        <div key={node.strapiId}>
          <Link
            to={`/category/${node.strapiId}`}
            className="category-home-link"
          >
            <h4 className="category-home-text">{node.title}</h4>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Categories
