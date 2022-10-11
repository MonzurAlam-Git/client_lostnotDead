import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';


const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();

    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (user) {
        navigate(from, { replace: true });
    }
    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <p>Loading...</p>;
    }


    const onSubmit = data => {
        const { email, password } = data;
        signInWithEmailAndPassword(email, password);
        console.log(user, email, password);
    };

    return (
        <div className='container w-25'>
            <h3 className="text-danger">Please Login to your account</h3>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='w-100 mb-2  border-1 shadow-3' placeholder='email'  {...register("email")} />

                <input className='w-100 mb-2  border-1 shadow-3' placeholder="password" {...register("password", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                <br />
                <input className='btn btn-danger ' type="submit" />
            </form>
            <SocialLogin></SocialLogin>
        </div>

    );
};

export default Login;