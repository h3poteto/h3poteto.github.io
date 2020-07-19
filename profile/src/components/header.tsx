import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Div, Text } from "atomize"

import "./header.css"

const Header = ({ siteTitle }) => (
  <Div
    bg="info900"
    d="flex"
    tag="header"
    justify="space-between"
    textColor="gray400"
    p={{ x: { xs: "1rem", sm: "2rem", md: "10rem" }, y: "1rem" }}
  >
    <Div>
      <Link
        to="/"
        style={{
          textDecoration: `none`,
        }}
      >
        <Text tag="h1" textSize="title" textColor="gray400" textWeight="200">
          {siteTitle}
        </Text>
      </Link>
    </Div>
    <Div d="flex" justify="flex-end" className="menu">
      <Text
        tag="h2"
        textSize="subheader"
        textColor="gray400"
        m={{ x: "0.5rem", y: 0 }}
        textWeight="200"
      >
        About Me
      </Text>
      <Text
        tag="h2"
        textSize="subheader"
        textColor="gray400"
        m={{ x: "0.5rem", y: 0 }}
        textWeight="200"
      >
        Career
      </Text>
      <Text
        tag="h2"
        textSize="subheader"
        textColor="gray400"
        m={{ x: "0.5rem", y: 0 }}
        textWeight="200"
      >
        OSS
      </Text>
      <Text
        tag="h2"
        textSize="subheader"
        textColor="gray400"
        m={{ x: "0.5rem", y: 0 }}
        textWeight="200"
      >
        Talks
      </Text>
      <Text
        tag="h2"
        textSize="subheader"
        textColor="gray400"
        m={{ x: "0.5rem", y: 0 }}
        textWeight="200"
      >
        Skills
      </Text>
    </Div>
  </Div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
