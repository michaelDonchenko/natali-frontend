import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import RecipeIcons from "./RecipeIcons"
import { Link } from "gatsby"

const RecipePreview = ({ recipe }) => {
  return (
    <Link to={`/recipe/${recipe.strapiId}`} className="recipe-grid-wrapper">
      <div className="recipe-image-div">
        <GatsbyImage
          className="recipe-image"
          image={getImage(recipe.main_image.localFile)}
          alt="recipe"
        />
      </div>
      <div className="recipe-details flex-column">
        <h3>{recipe.title}</h3>
        <div className="recipe-description">
          <p>{recipe.description}</p>
        </div>

        <RecipeIcons coockTime={recipe.coockTime} servings={recipe.servings} />
      </div>
    </Link>
  )
}

export default RecipePreview
