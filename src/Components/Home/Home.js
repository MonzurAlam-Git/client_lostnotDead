import React, { useEffect, useState } from 'react';
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
        <div>
            <div className='mb-5'>
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

            <div className='container d-flex '>
                {/* <h1 className="text-danger">Services : {services.length}</h1> */}


                <Row>
                    {
                        services.map(service =>
                            <Col md={3} lg={4}>
                                <Services key={service._id} service={service}></Services>
                            </Col>
                        )
                    }
                </Row>



            </div>

        </div>


    );
};

export default Home;