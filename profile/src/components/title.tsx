import React from "react"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import { Div, Text } from "atomize"

import styles from "./title.module.css"

const Title = () => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "89.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const imageData = data.desktop.childImageSharp.fluid
  return (
    <BackgroundImage
      Tag="section"
      className={styles.background}
      fluid={imageData}
      backgroundColor={`#040e18`}
    >
      <Div p={{ x: "1rem", y: "5rem" }} m={{ x: "auto", y: 0 }} maxW="960px">
        <Text tag="h1" textSize="display3" textColor="info200" textWeight="400">
          h3poteto
        </Text>
        <Text
          m={{ t: "1rem" }}
          tag="h2"
          textSize="display1"
          textColor="info300"
          textWeight="400"
        >
          Software Engineer in Japan
        </Text>
      </Div>
    </BackgroundImage>
  )
}

export default Title
