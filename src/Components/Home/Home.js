import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Services from '../Services/Services';
import { Col, Row } from 'react-bootstrap';


const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='container d-flex '>
            {/* <h1 className="text-danger">Services : {services.length}</h1> */}

            <Row>
                {
                    services.map(service =>
                        <Col md={3} lg={4}>
                            <Services key={service.id} service={service}></Services>
                        </Col>

                    )
                }
            </Row>



        </div>
    );
};

export default Home;