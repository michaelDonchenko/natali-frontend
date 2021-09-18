import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "../css/main.css"
import SocialIcons from "../components/SocialIcons"

const Logo = () => {
  const { strapiLogo } = useStaticQuery(graphql`
    {
      strapiLogo {
        logo_image {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  `)

  return (
    <div className="logo-container flex-column">
      <GatsbyImage
        alt="logo"
        className="logo"
        layout="constrained"
        image={getImage(strapiLogo.logo_image.localFile)}
      />

      <SocialIcons />
    </div>
  )
}

export default Logo
