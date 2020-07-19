import React from "react"
import { Div, Text } from "atomize"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import Slide from "../components/slide"

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
    <Div textAlign="center" id="career">
      <Text
        tag="h3"
        textSize="display1"
        textColor="info700"
        p={{ x: 0, y: "2rem" }}
      >
        Career
      </Text>
      <Div textAlign="left">
        <Text tag="h4" textSize="title" textColor="black500">
          LAPRAS, Inc
        </Text>
        <Text textColor="black300">2018/04 ~ now</Text>
        <ul style={{ marginTop: 12 }}>
          <li>
            <Text textSize="paragraph" textColor="black600">
              Software Engineer
            </Text>
          </li>
          <li>
            <Text textSize="paragraph" textColor="black600">
              Crawler Engineer
            </Text>
          </li>
          <li>
            <Text textSize="paragraph" textColor="black600">
              Site Reliability Engineer
            </Text>
          </li>
        </ul>
      </Div>
      <Div textAlign="left">
        <Text tag="h4" textSize="title" textColor="black500">
          CrowdWorks, Inc
        </Text>
        <Text textColor="black300">2015/03 ~ 2018/03</Text>
        <ul style={{ marginTop: 12 }}>
          <li>
            <Text textSize="paragraph" textColor="black600">
              Software Engineer
            </Text>
          </li>
          <li>
            <Text textSize="paragraph" textColor="black600">
              Tech Lead
            </Text>
          </li>
        </ul>
      </Div>
      <Div textAlign="left">
        <Text tag="h4" textSize="title" textColor="black500">
          Interfirm, Inc
        </Text>
        <Text textColor="black300">2013/04 ~ 2015/03</Text>
        <ul style={{ marginTop: 12 }}>
          <li>
            <Text textSize="paragraph" textColor="black600">
              Software Engineer
            </Text>
          </li>
        </ul>
      </Div>
    </Div>
    <Div textAlign="center" id="talks">
      <Text
        tag="h3"
        textSize="display1"
        textColor="info700"
        p={{ x: 0, y: "2rem" }}
      >
        Talks
      </Text>
      <Div d="flex" flexWrap="wrap" justify="space-between">
        <Div w="40%">
          <Slide id="aaf3dcc919ba4337a0e55011cf583f86" />
        </Div>
        <Div w="40%">
          <Slide id="3309256c58b243988c7d6c19d0b7a4ec" />
        </Div>
        <Div w="40%">
          <Slide id="8fa4a216b11e4677b151b1678631af44" />
        </Div>
        <Div w="40%">
          <Slide id="05d46634fa2f4b648b909e232bcf0f52" />
        </Div>
      </Div>
    </Div>
  </Layout>
)

export default IndexPage
