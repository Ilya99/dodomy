import React, { Component } from 'react'
import { Col, Container } from 'reactstrap'
import logo from 'global/images/logo.png'
import './header.styl'

export default class Header extends Component {
  render () {
    return (
      <Container>
        <Col className='logo' >
          <img src={logo} />
        </Col>
      </Container>
    )
  }
}
