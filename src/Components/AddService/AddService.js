import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [newService, setNewService] = useState({});
    const onSubmit = data => {
        setNewService(data);
        axios.post('http://localhost:5000/services', newService).then(res => console.log(res.data)).catch(err => console.log(err))
    };

    return (
        <div className='container'>
            <h2 className="text-warning bg-dark w-50 mx-auto p-2">Feel Free to Add Your Service</h2>
            <form className='mt-5 w-50 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2 w-50 border-1' placeholder='Type the service you will provide'  {...register("name")} /> <br />

                <input className='mb-2 w-50 border-1' placeholder='Put your image link here' {...register("img", { required: true })} /> <br />

                {errors.exampleRequired && <span>This field is required</span>}

                <input className='btn btn-dark fw-bold text-light w-25' type="submit" value="Add" />
            </form>

        </div>
    );
};

export default AddService;