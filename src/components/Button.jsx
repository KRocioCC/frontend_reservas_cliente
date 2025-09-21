import React from 'react';

const Button = ({
    children,
    onClick,
    variant = 'primary',
    size = 'md',
    disabled = false,
    fullWidth = false,
    className = '',
    type = 'button',
    icon
}) => {
    // Estilos base del botón
    const baseStyle = "font-medium rounded-lg transition-colors flex items-center justify-center";

    // Variantes de color
    const variants = {
        primary: "bg-blue-600 hover:bg-blue-700 text-white",
        secondary: "bg-slate-600 hover:bg-slate-700 text-white",
        outline: "bg-transparent border border-blue-500 text-blue-600 hover:bg-blue-50",
        danger: "bg-red-600 hover:bg-red-700 text-white"
    };

    // Tamaños disponibles
    const sizes = {
        sm: "px-3 py-2 text-xs",
        md: "px-4 py-2.5 text-sm",
        lg: "px-6 py-3 text-base"
    };

    // Combinar clases condicionales
    const buttonClass = `${baseStyle} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`.trim();

    return (
        <button
            type={type}
            className={buttonClass}
            onClick={onClick}
            disabled={disabled}
        >
            {icon && <span className="mr-2">{icon}</span>}
            {children}
        </button>
    );
};

export default Button;