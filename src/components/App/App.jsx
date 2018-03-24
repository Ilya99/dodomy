import React, { Component } from 'react'
import {Container} from 'reactstrap'
import Header from 'components/Header/Header'

export default class App extends Component {
  render () {
    return (
      <Container fluid>
        <Header />
      </Container>
    )
  }
}
