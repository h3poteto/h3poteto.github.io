import React from "react"
import { Div, Text } from "atomize"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const IndexPage = () => (
  <Layout>
    <SEO title="About Me" />
    <Div textAlign="center" id="about_me">
      <Text
        tag="h3"
        textSize="display1"
        textColor="info700"
        p={{ x: 0, y: "2rem" }}
      >
        About Me
      </Text>
      <Div d="flex" flexWrap="wrap">
        <Div w="200px" m={{ x: { xs: "auto", sm: 0 }, y: 0 }}>
          <Image />
        </Div>
        <Div m={{ x: { xs: "auto", sm: 0 }, y: 0 }} textAlign="left">
          <Text
            tag="h4"
            textSize="title"
            p={{ x: 0, t: "0.5rem" }}
            textColor="info700"
          >
            Akira Fukushima
          </Text>
          <Text tag="h5" textSize="subheader" textColor="gray700">
            @h3poteto
          </Text>
          <Text p={{ t: "0.5rem" }}>Software Engineer working in Tokyo.</Text>
        </Div>
      </Div>
    </Div>
  </Layout>
)

export default IndexPage
