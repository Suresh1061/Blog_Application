import React from 'react'
import logo from '../assets/logo.png'

function Logo({ width = '100px' }) {
    return <div className='lg:w-20 md:w-16 w-20'><img src={logo} width={width} alt="Logo" /></div>
}

export default Logo
