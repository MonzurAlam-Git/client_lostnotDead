import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import "../../../src/Components/experiment.css"

const OrderDetails = () => {
    // const [user] = useAuthState();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/orderDetails')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

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
                                <Button variant='danger mt-1 w-50' > Delete </Button>
                                <Button variant='info mt-1 w-50' > Update</Button>
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