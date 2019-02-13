import React from 'react'
import { Hero, Container, Heading } from 'react-bulma-components'

import Header from './Header'

const Top = () => (
  <div>
    <Hero color="primary" size="medium">
      <Hero.Head>
        <Header />
      </Hero.Head>

      <Hero.Body>
        <Container className="has-text-centered">
          <Heading>
            MonoMotion Robotics Framework
          </Heading>
          <Heading subtitle>
            Design your robots' motion without the hassle
          </Heading>
        </Container>
      </Hero.Body>
    </Hero>
  </div>
)

export default Top