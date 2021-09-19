import React from "react"
import Layout from "../components/Layout"
import "../css/about.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import Seo from "../components/Seo"

const about = ({ data }) => {
  const {
    strapiAboutMe: { info, profile_image },
  } = data

  return (
    <Layout>
      <Seo title="אודות" />
      <section className="section main-section">
        <section className="flex-center flex-column">
          <h2>קצת על עצמי</h2>

          <div className="about-info about-grid ">
            <div className="smallPadding">
              <p style={{ whiteSpace: "pre-line" }}>{info}</p>
            </div>

            <div className="smallPadding flex-center">
              <GatsbyImage
                image={getImage(profile_image.localFile)}
                alt="profile"
              />
            </div>
          </div>
        </section>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    strapiAboutMe {
      info
      profile_image {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
`

export default about
