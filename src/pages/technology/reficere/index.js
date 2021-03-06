import React from 'react'
import Header from '../../../Header'

/* eslint import/no-webpack-loader-syntax: off */
import post from '!html-loader!!markdown-loader!./details.md'

import { Hero, Content, Container, Heading, Section } from 'react-bulma-components'

const Post = () => (
  <div>
    <Header />
    <Hero color="primary" size="medium">
      <Hero.Body>
        <Container>
          <Heading>
            Reficere詳解
          </Heading>
        </Container>
      </Hero.Body>
    </Hero>
    <Section>
      <Content>
        <div dangerouslySetInnerHTML={{ __html: post }} />
      </Content>
    </Section>
  </div>
)

export default Post
