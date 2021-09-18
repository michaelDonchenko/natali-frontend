import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import "../css/recipes.css"
import Pager from "../components/Pager"
import RecipePreview from "../components/RecipePreview"

const RecipesTemplate = ({ pageContext, data }) => {
  const {
    allStrapiCategory: categories,
    allStrapiRecipe: { nodes: recipes },
  } = data

  return (
    <Layout>
      <section className="section section-center">
        <div className="flex-wrap-container">
          {categories.nodes?.map(category => (
            <Link key={category.strapiId} to={`/category/${category.strapiId}`}>
              <GatsbyImage
                image={getImage(category.image?.localFile)}
                alt={category.title}
                className="category-image"
              />
              <h4>{category.title}</h4>
            </Link>
          ))}
        </div>
        <hr></hr>

        <div className="flex-center flex-column">
          {recipes.length > 0 &&
            recipes.map(recipe => <RecipePreview recipe={recipe} />)}
        </div>

        <Pager pageContext={pageContext} />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query ($limit: Int, $skip: Int) {
    allStrapiRecipe(
      limit: $limit
      skip: $skip
      sort: { fields: updated_at, order: DESC }
    ) {
      nodes {
        title
        strapiId
        servings
        description
        coockTime
        main_image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }

    allStrapiCategory {
      nodes {
        title
        strapiId
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`

export default RecipesTemplate
