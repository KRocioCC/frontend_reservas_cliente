import React from 'react';

const Input = ({
    id,
    label,
    type = 'text',
    value,
    onChange,
    placeholder,
    error,
    required = false,
    disabled = false,
    className = '',
    ...props
}) => {
    return (
        <div className="mb-4">
            {label && (
                <label
                    htmlFor={id}
                    className="block text-sm font-medium text-gray-700 mb-1"
                >
                    {label} {required && <span className="text-red-500">*</span>}
                </label>
            )}
            <input
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                disabled={disabled}
                required={required}
                className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all 
          ${error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300'} 
          ${disabled ? 'bg-gray-100 text-gray-500 cursor-not-allowed' : 'bg-white'}
          ${className}`}
                {...props}
            />
            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        </div>
    );
};

export default Input;