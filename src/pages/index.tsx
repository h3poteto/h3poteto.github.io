import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Timeline, Container, Content, FlexboxGrid, Header, Nav, Navbar, Button, Footer } from 'rsuite'
import styles from '../styles/Home.module.css'
import Slide from '@/components/slide'
import Language from '@/components/language'
import Career from '@/components/career'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>About Me | h3poteto</title>
      </Head>
      <main className={inter.className}>
        <Container>
          <Header>
            <Navbar appearance="inverse" style={{ backgroundColor: 'var(--rs-primary-900)' }}>
              <Navbar.Brand href="/" style={{ fontWeight: '400', fontSize: '1.2em' }}>
                h3poteto
              </Navbar.Brand>
              <Nav pullRight>
                <Nav.Item href="/#about">About Me</Nav.Item>
                <Nav.Item href="/#career">Career</Nav.Item>
                <Nav.Item href="/#oss">OSS</Nav.Item>
                <Nav.Item href="/#talks">Talks</Nav.Item>
                <Nav.Item href="/#skills">Skills</Nav.Item>
              </Nav>
            </Navbar>
          </Header>
          <Content>
            <div className={styles.header}>
              <div className={styles.content}>
                <h1 style={{ color: '#eef7ff', fontWeight: '400' }}>h3poteto</h1>
                <h3 style={{ color: '#dceeff', fontWeight: '400' }}>Sofotware Engineer in Japan</h3>
              </div>
            </div>
            <div id="about" className={styles.content} style={{ textAlign: 'center', margin: '4vh auto' }}>
              <h2 style={{ color: 'var(--rs-primary-600)' }}>About Me</h2>
            </div>
            <div className={styles.content}>
              <FlexboxGrid>
                <FlexboxGrid.Item>
                  <img
                    src="/images/icon.png"
                    style={{
                      width: '128px',
                      height: '128px',
                      borderRadius: '50%',
                      marginRight: '4vh'
                    }}
                  />
                </FlexboxGrid.Item>
                <FlexboxGrid.Item>
                  <h4 style={{ color: 'var(--rs-primary-600)' }}>Akira Fukushima</h4>
                  <h5 style={{ color: 'var(--rs-gray-500)', margin: '1vh 0' }}>@h3poteto</h5>
                  <p style={{ margin: '1vh 0' }}>I'm a software engineer working in Japan.</p>
                  <FlexboxGrid style={{ margin: '2vh 0' }} align="middle">
                    <FlexboxGrid.Item>
                      <img src="/images/github.png" style={{ height: '42px', margin: '0' }} />
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item>
                      <img src="/images/pleroma.png" style={{ height: '42px', margin: '0 0 0 1vh' }} />
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item>
                      <img src="/images/mastodon.png" style={{ height: '42px', margin: '0 0 0 1vh' }} />
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item>
                      <img src="/images/twitter.png" style={{ height: '42px', margin: '0 0 0 1vh' }} />
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item>
                      <img src="/images/hatena.png" style={{ height: '62px', margin: '0 0 0 0' }} />
                    </FlexboxGrid.Item>
                  </FlexboxGrid>
                </FlexboxGrid.Item>
              </FlexboxGrid>
            </div>
            <div id="career" className={styles.content} style={{ textAlign: 'center', margin: '8vh auto' }}>
              <h2 style={{ color: 'var(--rs-primary-600)' }}>Career</h2>
            </div>
            <div className={styles.content}>
              <Timeline align="left" endless>
                <Timeline.Item>
                  <Career start="2013/4" company="Interfirm, Inc" jobs={['Software Engineer']} />
                </Timeline.Item>
                <Timeline.Item>
                  <Career start="2015/3" company="CrowdWorks, Inc" jobs={['Software Engineer', 'Tech Lead']} />
                </Timeline.Item>
                <Timeline.Item>
                  <Career start="2018/4" company="LAPRAS, Inc" jobs={['Site Reliability Engineer', 'Crawler Engineer']} />
                </Timeline.Item>
                <Timeline.Item>
                  <Career start="2020/9" company="Z Lab Corporation" jobs={['Software Engineer']} />
                </Timeline.Item>
                <Timeline.Item>
                  <Career start="2022/11" company="oVice, Inc" jobs={['Site Reliability Engineer']} />
                </Timeline.Item>
              </Timeline>
            </div>
            <div id="oss" className={styles.content} style={{ textAlign: 'center', margin: '8vh auto' }}>
              <h2 style={{ color: 'var(--rs-primary-600)' }}>OSS</h2>
            </div>
            <div className={styles.content}>
              <FlexboxGrid justify="space-around" style={{ margin: '3vh 0' }}>
                <FlexboxGrid.Item>
                  <a href="https://github.com/h3poteto/whalebird-desktop">
                    <img src="https://gh-card.dev/repos/h3poteto/whalebird-desktop.svg?fullname=" />
                  </a>
                </FlexboxGrid.Item>
                <FlexboxGrid.Item>
                  <a href="https://github.com/h3poteto/fedistar">
                    <img src="https://gh-card.dev/repos/h3poteto/fedistar.svg?fullname=" />
                  </a>
                </FlexboxGrid.Item>
              </FlexboxGrid>
              <FlexboxGrid justify="space-around" style={{ margin: '3vh 0' }}>
                <FlexboxGrid.Item>
                  <a href="https://github.com/h3poteto/megalodon">
                    <img src="https://gh-card.dev/repos/h3poteto/megalodon.svg?fullname=" />
                  </a>
                </FlexboxGrid.Item>
                <FlexboxGrid.Item>
                  <a href="https://github.com/h3poteto/megalodon-rs">
                    <img src="https://gh-card.dev/repos/h3poteto/megalodon-rs.svg?fullname=" />
                  </a>
                </FlexboxGrid.Item>
              </FlexboxGrid>
              <FlexboxGrid justify="space-around" style={{ margin: '3vh 0' }}>
                <FlexboxGrid.Item>
                  <a href="https://github.com/h3poteto/kube-job">
                    <img src="https://gh-card.dev/repos/h3poteto/kube-job.svg?fullname=" />
                  </a>
                </FlexboxGrid.Item>
                <FlexboxGrid.Item>
                  <a href="https://github.com/h3poteto/ecs-task">
                    <img src="https://gh-card.dev/repos/h3poteto/ecs-task.svg?fullname=" />
                  </a>
                </FlexboxGrid.Item>
              </FlexboxGrid>
              <FlexboxGrid justify="space-around" style={{ margin: '3vh 0' }}>
                <FlexboxGrid.Item>
                  <a href="https://github.com/h3poteto/fluentd-sidecar-injector">
                    <img src="https://gh-card.dev/repos/h3poteto/fluentd-sidecar-injector.svg?fullname=" />
                  </a>
                </FlexboxGrid.Item>
                <FlexboxGrid.Item>
                  <a href="https://github.com/h3poteto/electron-mock-ipc">
                    <img src="https://gh-card.dev/repos/h3poteto/electron-mock-ipc.svg?fullname=" />
                  </a>
                </FlexboxGrid.Item>
              </FlexboxGrid>
              <FlexboxGrid justify="space-around" style={{ margin: '3vh 0' }}>
                <FlexboxGrid.Item>
                  <Button href="https://github.com/h3poteto" appearance="primary" size="lg" style={{ padding: '0.6em 4em' }}>
                    More
                  </Button>
                </FlexboxGrid.Item>
              </FlexboxGrid>
            </div>
            <div id="talks" className={styles.content} style={{ textAlign: 'center', margin: '8vh auto' }}>
              <h2 style={{ color: 'var(--rs-primary-600)' }}>Talks</h2>
            </div>
            <div className={styles.content}>
              <Slide id="aaf3dcc919ba4337a0e55011cf583f86" />
              <Slide id="3309256c58b243988c7d6c19d0b7a4ec" />
              <Slide id="8fa4a216b11e4677b151b1678631af44" />
              <Slide id="05d46634fa2f4b648b909e232bcf0f52" />
              <FlexboxGrid justify="space-around" style={{ margin: '3vh 0' }}>
                <FlexboxGrid.Item>
                  <Button href="https://speakerdeck.com/h3poteto" appearance="primary" size="lg" style={{ padding: '0.6em 4em' }}>
                    More
                  </Button>
                </FlexboxGrid.Item>
              </FlexboxGrid>
            </div>
            <div id="skills" className={styles.content} style={{ textAlign: 'center', margin: '8vh auto' }}>
              <h2 style={{ color: 'var(--rs-primary-600)' }}>Skills</h2>
            </div>
            <div className={styles.content}>
              <FlexboxGrid justify="space-between" align="middle" style={{ margin: '4vh 0' }}>
                <FlexboxGrid.Item>
                  <Language image="/images/golang.png" name="Golang" />
                </FlexboxGrid.Item>
                <FlexboxGrid.Item>
                  <Language image="/images/elixir.png" name="Elixir" />
                </FlexboxGrid.Item>
              </FlexboxGrid>
              <FlexboxGrid justify="space-between" align="middle" style={{ margin: '4vh 0' }}>
                <FlexboxGrid.Item>
                  <Language image="/images/ruby.png" name="Ruby" />
                </FlexboxGrid.Item>
                <FlexboxGrid.Item>
                  <Language image="/images/rust.png" name="Rust" />
                </FlexboxGrid.Item>
              </FlexboxGrid>
              <FlexboxGrid justify="space-between" align="middle" style={{ margin: '4vh 0' }}>
                <FlexboxGrid.Item>
                  <Language image="/images/typescript.png" name="Typescript / Javascript" />
                </FlexboxGrid.Item>
                <FlexboxGrid.Item>
                  <Language image="/images/python.png" name="Python" />
                </FlexboxGrid.Item>
              </FlexboxGrid>
              <FlexboxGrid justify="space-between" align="middle" style={{ margin: '4vh 0' }}>
                <FlexboxGrid.Item>
                  <Language image="/images/swift.svg" name="Swift" />
                </FlexboxGrid.Item>
                <FlexboxGrid.Item>
                  <Language image="/images/react.png" name="React.js / Vue.js" />
                </FlexboxGrid.Item>
              </FlexboxGrid>
              <FlexboxGrid justify="space-between" align="middle" style={{ margin: '4vh 0' }}>
                <FlexboxGrid.Item>
                  <Language image="/images/kubernetes.png" name="Kubernetes" />
                </FlexboxGrid.Item>
                <FlexboxGrid.Item>
                  <Language image="/images/terraform.png" name="AWS / Terraform" />
                </FlexboxGrid.Item>
              </FlexboxGrid>
            </div>
          </Content>
          <Footer
            style={{
              backgroundColor: 'var(--rs-gray-100)',
              padding: '4em 0',
              textAlign: 'center'
            }}
          >
            &copy; 2023 <a href="https://pleroma.io/users/h3poteto">@h3poteto@pleroma.io</a>
          </Footer>
        </Container>
      </main>
    </>
  )
}
