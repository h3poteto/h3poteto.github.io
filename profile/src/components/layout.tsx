/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { StyleReset, Div } from "atomize"

import Header from "./header"
import Title from "./title"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <StyleReset />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Title />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <Div Tag="footer" p={{ y: "3rem" }} bg="gray200" textAlign="center">
        © {new Date().getFullYear()},{` `}
        <a href="https://pleroma.io/users/h3poteto">@h3poteto@pleroma.io</a>
      </Div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
