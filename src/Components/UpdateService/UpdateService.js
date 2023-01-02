import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const UpdateService = () => {
    const { id } = useParams();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [service, setService] = useState({});

    const onSubmit = data => {
        // setService(data);
        console.log(id);
        axios.put(`https://serverlostnotdead-production.up.railway.app/orderDetails/${id}`, data)
            .then(res => console.log(res))
    };

    return (
        <div>
            <h2 className="text-warning bg-dark w-50 mx-auto p-2">Feel Free to Edit Your Service</h2>
            <form className='mt-5 w-50 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2 w-50 border-1' placeholder='Type the service you will provide'  {...register("name")} /> <br />

                <input className='mb-2 w-50 border-1' placeholder='Put your image link here' {...register("img", { required: true })} /> <br />

                {errors.exampleRequired && <span>This field is required</span>}

                <input className='btn btn-dark fw-bold text-light w-25' type="submit" value="Add" />
            </form>

        </div>
    );
};

export default UpdateService;