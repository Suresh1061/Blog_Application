import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Input,Logo, Button } from './index'
import { useForm } from 'react-hook-form'
import authService from '../appwrite/auth'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../store/authSlice'

const Login = () => {
  const [error, setError] = useState('');
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const create = async (data) => {
    setError('');
    try {
      const userData = await authService.createAccount(data);
      // console.log(userData);
      if (userData) {
        const userData = await authService.getCurrentUser();
        // console.log(userData);
        if (userData) dispatch(login(userData));
        navigate('/');
      }
    } catch (error) {
      setError(error.message);
    }
  }
  // const selector = useSelector((state) => state.auth.userData);

  return (
    <div className=' flex justify-center items-center w-full'>
      <div className=' mx-auto w-full max-w-lg bg-[#222222] p-10 rounded-lg text-white border border-gray-600'>
        <div className=' my-2 flex justify-center'>
          <Logo />
        </div>
        <h2 className=' text-center text-2xl font-bold leading-tight'>Sign up to create account </h2>
        <p className=' text-center py-2 text-base text-slate-400 '>
          Already have an account? &nbsp;
          <Link to='/login' className=' text-blue-600 hover:underline font-medium transition-all duration-200 text-primary '>Sign In</Link>
        </p>
        {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}
        <form onSubmit={handleSubmit(create)} className=' mt-8'>
          <div className=' space-y-5'>
            <Input
              label="Full Name : "
              placeholder="Enter your full name"
              {...register('name', {
                required: true,
              })}
            />
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
            <Button type='submit' className=' w-full hover:bg-blue-600'>Sign up</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
