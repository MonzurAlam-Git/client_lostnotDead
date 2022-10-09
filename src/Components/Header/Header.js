import React from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div className='mb-5'>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className='fw-bold' href="#home">
                        {/* <img src="../../../public/logo.png" alt="" /> */}
                        Volunteer network
                    </Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Donations</Nav.Link>
                        <Nav.Link href="#pricing">Add</Nav.Link>
                        <Nav.Link href="#pricing">Blog</Nav.Link>
                        <Nav.Link href="#pricing"> <Button variant="btn btn-primary">Register</Button> </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <h1 className='text-danger mt-5 mb-3'>I Grow By Helping people IN Need</h1>

            <Form className="d-flex container w-50 mt-3">
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                />
                <Button variant="btn btn-success">Search</Button>
            </Form>
        </div>
    );
};

export default Header;