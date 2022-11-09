import React, { useState, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Container, Nav, Navbar, NavDropdown, Form, Button, Modal } from 'react-bootstrap'
import { useProductContext } from '../../context/ListProducts'
import { AuthContext } from '../../context/AuthContext'
import Logo from '../../assets/logo.svg'
import './navbarComponent.scss'

const NavbarComponent = () => {
  // CONTEXT
  const { isAuth, logout, userData } = useContext(AuthContext)
  const context = useProductContext()

  const navigate = useNavigate()
  const [searchProdoctValue, setSearchProductValue] = useState('')

  // FUNCIONES DE BUSQUEDA
  const handleSearchValue = (e) => {
    const { target: { value } } = e
    setSearchProductValue(value.toLowerCase())
  }
  const submitSearch = (e) => {
    e.preventDefault()
    context.setLoadingStatus(false)
    navigate(`/search/${searchProdoctValue.replace(/\s+/g, '-')}`)
  }

  // CERRAR SESION
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const closeSesion = () => {
    logout()
    setShow(true)
    navigate('/home')
  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Log out successfully</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your sesion has been closed correctly!</Modal.Body>
        <Modal.Footer>
          <Button variant='warning' onClick={handleClose}>
            Got it!
          </Button>
        </Modal.Footer>
      </Modal>
      <Navbar collapseOnSelect bg='dark' expand='lg' sticky='top' className='navbar'>
        <Container>
          <Navbar.Brand className='navbar__logo'>
            <Link to='/home' className='fw-bold'>
              <img
                alt='logo'
                src={Logo}
                width='30'
                height='30'
                className='d-inline-block align-top'
              />{' '}
              One2Shop!
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' className='navbar__toggle' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='me-auto'
              style={{ maxHeight: '200px' }}
              navbarScroll
            >
              <Form className='d-flex' onSubmit={submitSearch}>
                <Form.Control
                  type='search'
                  placeholder='All what you want!'
                  className='me-2'
                  aria-label='Search'
                  name='searchValue'
                  onChange={handleSearchValue}
                />
                <Button
                  variant='outline-danger'
                  type='submit'
                >Search
                </Button>
              </Form>
              {
                !isAuth
                  ? (
                    <NavDropdown title='Login / Sign up' id='basic-nav-dropdown' className='navbar__toggle-dropdown'>
                      <NavDropdown.Item onClick={() => navigate('/login')} className='navbar__dropdown-item'>Login</NavDropdown.Item>
                      <NavDropdown.Item onClick={() => navigate('/signup')} className='navbar__dropdown-item'>Sign Up</NavDropdown.Item>
                    </NavDropdown>
                    )
                  : (
                    <NavDropdown title={userData.first_name} id='basic-nav-dropdown' className='navbar__toggle-dropdown'>
                      <>
                        <NavDropdown.Item onClick={() => navigate('/account')} className='navbar__dropdown-item'>My account</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={closeSesion} className='navbar__dropdown-item'>Log out</NavDropdown.Item>
                      </>
                    </NavDropdown>
                    )
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarComponent
