import React from "react"
import { Div, Text, Button } from "atomize"
import Img from "gatsby-image"
import { Link } from "gatsby"

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
          <Img
            sizes={Image({ filename: "icon.png" })}
            style={{
              width: 120,
              borderRadius: 60,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
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
          <Div m={{ t: "1rem" }} d="flex" align="center">
            <Div>
              <Link to="https://github.com/h3poteto">
                <Img
                  sizes={Image({ filename: "github.png" })}
                  style={{ width: 42 }}
                />
              </Link>
            </Div>
            <Div p={{ l: "12px" }}>
              <Link to="https://pleroma.io/users/h3poteto">
                <Img
                  sizes={Image({ filename: "pleroma.png" })}
                  style={{ width: 26 }}
                />
              </Link>
            </Div>
            <Div p={{ l: "12px" }}>
              <Link to="https://fedibird.com/@h3poteto">
                <Img
                  sizes={Image({ filename: "mastodon.png" })}
                  style={{ width: 42 }}
                />
              </Link>
            </Div>
            <Div p={{ l: "12px" }}>
              <Link to="https://twitter.com/h3_poteto">
                <Img
                  sizes={Image({ filename: "twitter.png" })}
                  style={{ width: 42, borderRadius: 24 }}
                />
              </Link>
            </Div>
            <Div p={{ l: "4px" }}>
              <Link to="https://h3poteto.hatenablog.com/">
                <Img
                  sizes={Image({ filename: "hatena.png" })}
                  style={{ width: 64 }}
                />
              </Link>
            </Div>
          </Div>
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
          Z Lab Corporation
        </Text>
        <Text textColor="black300">2020/09 ~ now</Text>
        <ul style={{ marginTop: 12 }}>
          <li>
            <Text textSize="paragraph" textColor="black600">
              Software Engineer
            </Text>
          </li>
        </ul>
      </Div>
      <Div textAlign="left">
        <Text tag="h4" textSize="title" textColor="black500">
          LAPRAS, Inc
        </Text>
        <Text textColor="black300">2018/04 ~ 2020/08</Text>
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
    <Div textAlign="center" id="oss">
      <Text
        tag="h3"
        textSize="display1"
        textColor="info700"
        p={{ x: 0, y: "2rem" }}
      >
        OSS
      </Text>
      <Div d="flex" flexWrap="wrap" justify="space-between">
        <Div w={{ xs: "100%", sm: "45%", md: "45%" }}>
          <a href="https://github.com/h3poteto/whalebird-desktop">
            <img src="https://gh-card.dev/repos/h3poteto/whalebird-desktop.svg?fullname=" />
          </a>
        </Div>
        <Div w={{ xs: "100%", sm: "45%", md: "45%" }}>
          <a href="https://github.com/h3poteto/megalodon">
            <img src="https://gh-card.dev/repos/h3poteto/megalodon.svg?fullname=" />
          </a>
        </Div>
        <Div w={{ xs: "100%", sm: "45%", md: "45%" }}>
          <a href="https://github.com/h3poteto/kube-job">
            <img src="https://gh-card.dev/repos/h3poteto/kube-job.svg?fullname=" />
          </a>
        </Div>
        <Div w={{ xs: "100%", sm: "45%", md: "45%" }}>
          <a href="https://github.com/h3poteto/ecs-goploy">
            <img src="https://gh-card.dev/repos/h3poteto/ecs-goploy.svg?fullname=" />
          </a>
        </Div>
        <Div w={{ xs: "100%", sm: "45%", md: "45%" }}>
          <a href="https://github.com/h3poteto/fluentd-sidecar-injector">
            <img src="https://gh-card.dev/repos/h3poteto/fluentd-sidecar-injector.svg?fullname=" />
          </a>
        </Div>
        <Div w={{ xs: "100%", sm: "45%", md: "45%" }}>
          <a href="https://github.com/h3poteto/electron-mock-ipc">
            <img src="https://gh-card.dev/repos/h3poteto/electron-mock-ipc.svg?fullname=" />
          </a>
        </Div>
      </Div>
      <Link to="https://github.com/h3poteto">
        <Button
          h="2.5rem"
          p={{ x: "4rem" }}
          textSize="subheader"
          textColor="gray200"
          hoverTextColor="gray100"
          bg="info800"
          hoverBg="info900"
          m={{ x: "auto", y: 0 }}
        >
          More
        </Button>
      </Link>
    </Div>
    <Div textAlign="center" id="talks" m={{ t: "3rem" }}>
      <Text
        tag="h3"
        textSize="display1"
        textColor="info700"
        p={{ x: 0, y: "2rem" }}
      >
        Talks
      </Text>
      <Div>
        <Div w="80%" m={{ x: "auto", y: 0 }}>
          <Slide id="aaf3dcc919ba4337a0e55011cf583f86" />
        </Div>
        <Div w="80%" m={{ x: "auto", y: 0 }}>
          <Slide id="3309256c58b243988c7d6c19d0b7a4ec" />
        </Div>
        <Div w="80%" m={{ x: "auto", y: 0 }}>
          <Slide id="8fa4a216b11e4677b151b1678631af44" />
        </Div>
        <Div w="80%" m={{ x: "auto", y: 0 }}>
          <Slide id="05d46634fa2f4b648b909e232bcf0f52" />
        </Div>
      </Div>
      <Link to="https://speakerdeck.com/h3poteto">
        <Button
          h="2.5rem"
          p={{ x: "4rem" }}
          textSize="subheader"
          textColor="gray200"
          hoverTextColor="gray100"
          bg="info800"
          hoverBg="info900"
          m={{ x: "auto", y: 0 }}
        >
          More
        </Button>
      </Link>
    </Div>
    <Div textAlign="center" id="skills" m={{ t: "3rem" }}>
      <Text
        tag="h3"
        textSize="display1"
        textColor="info700"
        p={{ x: 0, y: "2rem" }}
      >
        Skills
      </Text>
      <Div
        textAlign="left"
        d="flex"
        flexWrap="wrap"
        justify="space-between"
        align="center"
      >
        <Div
          d="flex"
          w={{ xs: "90%", sm: "40%", md: "40%" }}
          align="center"
          m={{ y: "1rem" }}
        >
          <Div w="100px" textAlign="center">
            <Img
              sizes={Image({ filename: "golang.png" })}
              style={{ width: 90, marginLeft: "auto", marginRight: "auto" }}
            />
          </Div>
          <Text
            textSize="subheader"
            textColor="black600"
            textWeight="600"
            p={{ l: "2rem" }}
          >
            Golang
          </Text>
        </Div>
        <Div
          d="flex"
          w={{ xs: "90%", sm: "40%", md: "40%" }}
          align="center"
          m={{ y: "1rem" }}
        >
          <Div w="100px" textAlign="center">
            <Img
              sizes={Image({ filename: "ruby.png" })}
              style={{ width: 50, marginLeft: "auto", marginRight: "auto" }}
            />
          </Div>
          <Text
            textSize="subheader"
            textColor="black600"
            textWeight="600"
            p={{ l: "2rem" }}
          >
            Ruby / Rails
          </Text>
        </Div>
        <Div
          d="flex"
          w={{ xs: "90%", sm: "40%", md: "40%" }}
          align="center"
          m={{ y: "1rem" }}
        >
          <Div w="100px" textAlign="center">
            <Img
              sizes={Image({ filename: "elixir.png" })}
              style={{ width: 60, marginLeft: "auto", marginRight: "auto" }}
            />
          </Div>
          <Text
            textSize="subheader"
            textColor="black600"
            textWeight="600"
            p={{ l: "2rem" }}
          >
            Elixir / Phoenix
          </Text>
        </Div>
        <Div
          d="flex"
          w={{ xs: "90%", sm: "40%", md: "40%" }}
          align="center"
          m={{ y: "1rem" }}
        >
          <Div w="100px" textAlign="center">
            <Img
              sizes={Image({ filename: "python.png" })}
              style={{ width: 50, marginLeft: "auto", marginRight: "auto" }}
            />
          </Div>
          <Text
            textSize="subheader"
            textColor="black600"
            textWeight="600"
            p={{ l: "2rem" }}
          >
            Python / Django
          </Text>
        </Div>
        <Div
          d="flex"
          w={{ xs: "90%", sm: "40%", md: "40%" }}
          align="center"
          m={{ y: "1rem" }}
        >
          <Div w="100px" textAlign="center">
            <Img
              sizes={Image({ filename: "terraform.png" })}
              style={{ width: 60, marginLeft: "auto", marginRight: "auto" }}
            />
          </Div>
          <Text
            textSize="subheader"
            textColor="black600"
            textWeight="600"
            p={{ l: "2rem" }}
          >
            AWS / terraform
          </Text>
        </Div>
        <Div
          d="flex"
          w={{ xs: "90%", sm: "40%", md: "40%" }}
          align="center"
          m={{ y: "1rem" }}
        >
          <Div w="100px" textAlign="center">
            <Img
              sizes={Image({ filename: "kubernetes.png" })}
              style={{ width: 50, marginLeft: "auto", marginRight: "auto" }}
            />
          </Div>
          <Text
            textSize="subheader"
            textColor="black600"
            textWeight="600"
            p={{ l: "2rem" }}
          >
            Kubernetes
          </Text>
        </Div>
        <Div
          d="flex"
          w={{ xs: "90%", sm: "40%", md: "40%" }}
          align="center"
          m={{ y: "1rem" }}
        >
          <Div w="100px" textAlign="center">
            <Img
              sizes={Image({ filename: "react.png" })}
              style={{ width: 80, marginLeft: "auto", marginRight: "auto" }}
            />
          </Div>
          <Text
            textSize="subheader"
            textColor="black600"
            textWeight="600"
            p={{ l: "2rem" }}
          >
            React.js / Vue.js
          </Text>
        </Div>
      </Div>
    </Div>
  </Layout>
)

export default IndexPage
