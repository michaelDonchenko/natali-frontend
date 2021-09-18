import React from "react"
import Categories from "../components/Categories"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import "../css/home.css"
import { useStaticQuery, graphql, Link } from "gatsby"
import RecipePreview from "../components/RecipePreview"

export default function Home() {
  const { allStrapiRecipe: recipes } = useStaticQuery(graphql`
    {
      allStrapiRecipe(filter: { featured: { eq: true } }) {
        nodes {
          title
          strapiId
          description
          coockTime
          servings
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
  `)

  return (
    <Layout>
      <Seo title="עמוד הבית" />
      <section className="section section-center">
        <Categories />

        <h2>מתכונים מובחרים</h2>
        <div className="flex-center flex-column">
          {recipes.nodes?.map(recipe => (
            <RecipePreview key={recipe.strapiId} recipe={recipe} />
          ))}
        </div>

        <div className="flex-center">
          <Link className="navigation-link" to="/recipes">
            מתכונים נוספים
          </Link>
        </div>
      </section>
    </Layout>
  )
}
