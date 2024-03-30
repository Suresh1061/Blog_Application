import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Input, Button, Logo } from './index'
import { useForm } from 'react-hook-form'
import { login as authLogin } from '../store/authSlice'
import authService from '../appwrite/auth'
import { useDispatch } from 'react-redux'


const Login = () => {
    const [error, setError] = useState('');
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const login = async (data) => {
        setError('');
        try {
            const session = await authService.login(data);
            if (session) {
                const userData = await authService.getCurrentUser();
                if (userData) dispatch(authLogin(userData));
                navigate('/');
            }
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className=' flex justify-center items-center w-full'>
            <div className=' mx-auto w-full max-w-lg bg-[#222222] p-10 rounded-lg text-white border border-gray-600'>
                <div className=' my-2 flex justify-center'>
                    <Logo />
                </div>
                <h2 className=' text-center text-2xl font-bold leading-tight'>Sign in to your account </h2>
                <p className=' text-center py-2 text-base text-slate-400 '>
                    Dont&apos;t have any account? &nbsp;
                    <Link to='/signup' className=' text-blue-600 hover:underline font-medium transition-all duration-200 text-primary '>Sign Up</Link>
                </p>
                {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}
                <form onSubmit={handleSubmit(login)} className=' mt-8'>
                    <div className=' space-y-5'>
                        <Input
                            label="Email : "
                            type="email"
                            placeholder="Enter your email address"
                            {...register('email', {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                }
                            })}
                        />
                        <Input
                            label="Password : "
                            type="password"
                            placeholder="Enter your password"
                            {...register('password', {
                                required: true,
                            })}
                        />
                        <Button type='submit' className=' w-full hover:bg-blue-600'>Log in</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
