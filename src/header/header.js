import React from 'react'
import snap from '../assets/logo.svg'
import Button from 'react-bootstrap/Button';
import './header.css'
import { GoGoal } from 'react-icons/go';
import { RiTodoFill } from 'react-icons/ri';
import { FcPlanner } from 'react-icons/fc';
import { HiBell } from 'react-icons/hi';

// import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';


import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Header() {
  return (
    <>
      {['md', ].map((expand) => (
        <Navbar key={expand} expand={expand} className=" mb-3">
          <Container fluid>
            <Navbar.Brand href="#">
                 <img src= {snap}  alt="logo" width="50"
              height="40"
              className="d-inline-block align-top logo" />

            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-start flex-grow-1 pe-3 fs-5">
                  
                  <NavDropdown
                    title="feautures"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action1"><RiTodoFill /> Todo list</NavDropdown.Item>
                    <NavDropdown.Item href="#action2">
                    <FcPlanner /> Calender
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action3">
                    <HiBell /> Reminder
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action3">
                    <GoGoal /> Planning
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="company"

                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action1">History</NavDropdown.Item>
                    <NavDropdown.Item href="#action2">
                      Our team
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action3">
                      Blog
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#action1">careers</Nav.Link>
                  <Nav.Link href="#action2">about</Nav.Link>
                </Nav>
                <Button variant="text" href="#text-buttons"  className='block'>Login</Button> {' '}
               <Button variant="outline-secondary" href="#text-buttons " className='block' >Register</Button>
                  
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;


