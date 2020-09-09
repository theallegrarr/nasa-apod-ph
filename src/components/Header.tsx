import React, { useEffect } from 'react';
import { Navbar, Nav, Alert } from 'react-bootstrap'
import DatePicker from 'react-datepicker';
import { connect } from 'react-redux'

import { getImage } from "../redux/actions/image"

function Header(props: any) {

  const handleChange = (value: any) => {
    props.getImage(new Date(value))
  }

  useEffect(() => {
    props.getImage(new Date())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return(
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">NASA Photo of the Day</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            <Nav.Link className="mr-5" href="/favorites">
              <span role='img' aria-label='heart'>❤️</span> My Favorites
            </Nav.Link>
            <div className="mt-1 mb-1">
              <DatePicker
                selected={props.image.date}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {props.image.error &&
        <Alert variant='danger'>
          {props.image.error}
        </Alert>
      }
  </>)
}

const mapStateToProps = (state: any) => ({
  image: state.image
})

const mapDispatchToProps = {
  getImage
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)