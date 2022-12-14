import React from 'react';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
const Appnav = () => {

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home" className='fw-dark fs-2'>Logo</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link href="#home" className='fw-dark fs-5'>DashBoard</Nav.Link>
                        <Nav.Link href="#link" className='fw-dark fs-5'>Mint</Nav.Link>
                        <Nav.Link href="#home" className='fw-dark fs-5'>Redeem</Nav.Link>
                        <Nav.Link href="#link" className='fw-dark fs-5'>Docs</Nav.Link>
                        <Nav.Link href="#home" className='fw-dark fs-5'>About</Nav.Link>
                        <Nav.Link href="#link" className='fw-dark fs-5'>Contacts</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Appnav;