import React from 'react';
import { useForm } from 'react-hook-form';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../../../src/firebase.init";


const Register = () => {
    const { register, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const onSubmit = data => {
        const { name, email, password } = data;
        createUserWithEmailAndPassword(email, password)

    };
    return (
        <div className='container' >
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='w-50 mb-2 ' placeholder='name' {...register("name", { required: true })} /> <br />
                <input className='w-50 mb-2 ' placeholder='email' {...register("email", {})} /> <br />
                <input className='w-50 mb-2 ' placeholder='password' type="password" {...register("password", { required: true })} /> <br />
                <input className='btn btn-success' type="submit" />
            </form>
        </div>
    );
};

export default Register;