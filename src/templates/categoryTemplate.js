import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import RecipePreview from "../components/RecipePreview"
import Seo from "../components/Seo"

const Category = ({ pageContext, data }) => {
  const { title } = pageContext

  const {
    allStrapiRecipe: { nodes: recipes },
  } = data

  return (
    <Layout>
      <Seo title={title} />
      <section className="section section-center">
        <h2>{title}</h2>

        {recipes && !recipes.length && (
          <h4>אין מתכונים כרגע אנה נסו במועד מאוחר יותר.</h4>
        )}

        <div className="flex-center flex-column">
          {recipes.length > 0 &&
            recipes.map(recipe => {
              return <RecipePreview recipe={recipe} key={recipe.strapiId} />
            })}
        </div>
      </section>
    </Layout>
  )
}

export const recipesQuery = graphql`
  query recipesQuery($title: String) {
    allStrapiRecipe(
      filter: { categories: { elemMatch: { title: { eq: $title } } } }
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
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`

export default Category
