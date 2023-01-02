import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import "../../../src/Components/experiment.css"

const OrderDetails = () => {
    // const [user] = useAuthState();
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://serverlostnotdead-production.up.railway.app/orderDetails')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const handleUpdate = id => {
        navigate(`/updateService/${id}`)
    }

    const handleDelete = id => {
        axios.delete(`https://serverlostnotdead-production.up.railway.app/orderDetails/${id}`)
            .then(result => {
                const restOrders = orders.filter(order => order._id !== id)
                setOrders(restOrders);
            })

        // fetch(`https://serverlostnotdead-production.up.railway.app/orderDetails/${id}`, {
        //     method: "DELETE"
        // })
        //     .then(res => res.json())
        //     .then(result => {
        //         const restOrders = orders.filter(order => order._id !== id)
        //         setOrders(restOrders);
        //     })
    }




    return (
        <div>
            <h3>Order Details {orders.length}</h3>
            <Row>
                {orders.map(order =>
                    <Col md={3}>
                        <Card className="bg-dark text-white container w-75 mb-5">
                            <Card.Img src={order.img} alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>{order.name}</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Button variant='success w-50'> Checkout</Button> <br />
                                <Button onClick={() => handleDelete(order._id)} variant='danger mt-1 w-50' > Delete </Button>
                                <Button variant='info mt-1 w-50' onClick={() => handleUpdate(order._id)} > Update</Button>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>

                )
                }

            </Row>





        </div>
    );
};

export default OrderDetails; 