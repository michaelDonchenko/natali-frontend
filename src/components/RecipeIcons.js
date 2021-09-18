import React from "react"
import { FiClock } from "react-icons/fi"
import { BsPeople } from "react-icons/bs"

const RecipeIcons = ({ coockTime, servings }) => {
  return (
    <div className="flex-center">
      <div className="flex-column">
        <span className="icon-title">
          <FiClock style={{ marginLeft: "0.3rem" }} /> זמן הכנה
        </span>
        <span className="icon-info">{coockTime} דקות</span>
      </div>

      <div className="flex-column">
        <span className="icon-title">
          <BsPeople style={{ marginLeft: "0.3rem" }} /> סועדים
        </span>

        <span className="icon-info">{servings} אנשים</span>
      </div>
    </div>
  )
}

export default RecipeIcons
