import axios from 'axios';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./Services.css"

const Services = ({ service }) => {
    const { _id, name, img } = service;
    const navigate = useNavigate();

    const handleOrder = () => {
        navigate('/orderDetails');
        axios.post(`http://localhost:5000/orderDetails`, service)
            .then(res => console.log(res)
            )
    }

    return (
        <div className='mx-auto mb-3 '>
            <Card className='w-75 mb-5 shadow-lg'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button onClick={() => handleOrder()} variant="success">Book</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Services;
