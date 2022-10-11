import React from 'react';
import { useForm } from 'react-hook-form';

const VolunteerRegistartion = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <h1>VolunteerRegistartion</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2 w-50 border-1' placeholder='name'  {...register("name")} /> <br />
                <input className='mb-2 w-50 border-1' placeholder='email' {...register("email", { required: true })} /> <br />
                <input type="date" className='mb-2 w-50 border-1' placeholder='month/date/year'  {...register("date")} /> <br />
                <input className='mb-2 w-50 border-1' placeholder='description' {...register("description", { required: true })} /> <br />

                {errors.exampleRequired && <span>This field is required</span>}

                <input className='btn btn-dark fw-bold text-light' type="submit" value="Registration" />
            </form>
        </div>
    );
};

export default VolunteerRegistartion;
