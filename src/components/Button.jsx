import React from 'react'

const Button = ({
    children,
    type = 'button',
    bgColor = 'bg-blue-700',
    textColor = 'text-white',
    className = '',
    ...props
}) => {
    return (
        <button
            className={`py-2 px-4 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    )
}

export default Button
