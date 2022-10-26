import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import Logo from '../../assets/logo.svg'
import './NavbarComponent.css'

const NavbarComponent = () => {
  return (
    <>
      <Navbar bg='dark' expand='lg' sticky='top'>
        <Container>
          <Navbar.Brand>
            <Link>
              <img
                alt='logo'
                src={Logo}
                width='30'
                height='30'
              />{' '}
              One2Shop!
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarComponent
