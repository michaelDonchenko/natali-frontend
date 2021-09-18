import { Link } from "gatsby"
import React from "react"

const Pager = ({ pageContext }) => {
  const { humanPageNumber, numberOfPages, nextPagePath, previousPagePath } =
    pageContext
  return (
    <div>
      <p>
        עמוד {humanPageNumber} מתוך {numberOfPages}
      </p>
      {previousPagePath && (
        <Link
          to={previousPagePath}
          style={{ marginLeft: "1rem" }}
          className="navigation-link"
        >
          לעמוד הקודם
        </Link>
      )}

      {nextPagePath && (
        <Link to={nextPagePath} className="navigation-link">
          לעמוד הבא
        </Link>
      )}
    </div>
  )
}

export default Pager
