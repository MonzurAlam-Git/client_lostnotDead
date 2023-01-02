import axios from 'axios';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import "./Services.css"

const Services = ({ service }) => {
    const { name, img } = service;
    const [user] = useAuthState(auth);

    const navigate = useNavigate();

    const handleOrder = () => {
        const order = {
            name: name,
            img: img,
            email: user.email,
        }
        // navigate('/orderDetails');
        axios.post(`https://serverlostnotdead-production.up.railway.app/orderDetails`, order)
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
