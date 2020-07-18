import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Div, Text } from "atomize"

const Header = ({ siteTitle }) => (
  <Div
    bg="success900"
    d="flex"
    tag="header"
    justify="space-between"
    textColor="gray400"
    p={{ x: "10rem", y: "1rem" }}
    m={{ b: "1rem" }}
  >
    <Div>
      <Link
        to="/"
        style={{
          textDecoration: `none`,
        }}
      >
        <Text tag="h1" textSize="title" textColor="gray400">
          {siteTitle}
        </Text>
      </Link>
    </Div>
    <Div d="flex" justify="flex-end">
      <Text
        tag="h2"
        textSize="subheader"
        textColor="gray400"
        m={{ x: "0.5rem", y: 0 }}
      >
        About Me
      </Text>
      <Text
        tag="h2"
        textSize="subheader"
        textColor="gray400"
        m={{ x: "0.5rem", y: 0 }}
      >
        Career
      </Text>
      <Text
        tag="h2"
        textSize="subheader"
        textColor="gray400"
        m={{ x: "0.5rem", y: 0 }}
      >
        OSS
      </Text>
      <Text
        tag="h2"
        textSize="subheader"
        textColor="gray400"
        m={{ x: "0.5rem", y: 0 }}
      >
        Talks
      </Text>
      <Text
        tag="h2"
        textSize="subheader"
        textColor="gray400"
        m={{ x: "0.5rem", y: 0 }}
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
