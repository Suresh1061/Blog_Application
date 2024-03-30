import React, { forwardRef, useId } from 'react'

const Select = ({
    options,
    label,
    className = '',
    ...props
}, ref) => {
    const id = useId();
    return (
        <div className=' w-full'>
            {label && <label htmlFor={id} className=' inline-block mb-1 pl-1 font-medium text-white'>
                {label}
            </label>}
            <select
                id={id}
                className={`px-3 py-2 rounded-lg font-medium text-black cursor-pointer bg-white outline-none duration-200 focus:bg-gray-50 border border-gray-200 w-full ${className}`}
                ref={ref}
                {...props}
            >
                {options?.map(option => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>

        </div>
    )
}

export default forwardRef(Select)
