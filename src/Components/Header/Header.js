import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };

    return (
        <div className='mb-5'>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className='fw-bold' href="/">
                        {/* <img src="../../../public/logo.png" alt="" /> */}
                        Volunteer network
                    </Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link className='mt-2' href="/orderDetails">Cart</Nav.Link>
                        <Nav.Link className='mt-2 fw-bold text-success' href="/reg4volunteer">Volunteer Registration</Nav.Link>
                        <Nav.Link className='mt-2' href="/addService">Add</Nav.Link>
                        <Nav.Link href="/register"> <Button variant="btn btn-primary">Register</Button> </Nav.Link>
                        {user ? <Button className=' mb-1' onClick={logout} variant="btn btn-danger h-75 mt-2">Logout</Button> : <Nav.Link href="/login"> <Button className=' mb-1' variant="btn btn-primary">Login</Button> </Nav.Link>}
                    </Nav>
                </Container>
            </Navbar>


        </div>
    );
};

export default Header;