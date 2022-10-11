import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../../../src/Components/experiment.css"

const Order = () => {
    const { id } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    console.log(id);
    return (
        <div className=' container'>
            <h1 className='text-success'>order page for -- <span className='text-danger'> {service.name}</span></h1>
            <img className='w-25 mt-3 mb-3' src={service.img} alt="" /> <br />
            <button className="btn btn-primary w-25"> checkout</button>
        </div>
    );
};

export default Order;