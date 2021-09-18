import React from "react"
import Layout from "../components/Layout"
import "../css/singleRecipe.css"
import { graphql, navigate } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import RecipeIcons from "../components/RecipeIcons"

const recipeTemplate = ({ pageContext, data }) => {
  const { strapiRecipe: recipe } = data

  return (
    <Layout>
      <section className="section section-center">
        <h2>{pageContext.title}</h2>

        <div className="recipe-grid-container">
          <div className="mediumPadding">
            <h3>מצרכים</h3>
            {recipe.ingrediant?.map(ing => (
              <p key={ing.id}>{ing.name}</p>
            ))}

            <h3>אופן הכנה</h3>
            {recipe.process?.map((proc, i) => (
              <p key={proc.id}>
                {i + 1}.{proc.text}
              </p>
            ))}
          </div>

          <div className="mediumPadding">
            <RecipeIcons
              servings={recipe.servings}
              coockTime={recipe.coockTime}
            />

            <p className="margin-2">{recipe.description}</p>

            <GatsbyImage
              className="recipe-main-image"
              image={getImage(recipe.inside_image.localFile)}
            />
          </div>
        </div>
        <hr></hr>

        <span className="navigation-link" onClick={() => navigate(-1)}>
          חזרה אחורה
        </span>
      </section>
    </Layout>
  )
}

export const singleRecipe = graphql`
  query singleRecipe($title: String) {
    strapiRecipe(title: { eq: $title }) {
      inside_image {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
      coockTime
      description
      ingrediant {
        id
        name
      }
      main_image {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
      servings
      title
      process {
        id
        text
      }
    }
  }
`

export default recipeTemplate
