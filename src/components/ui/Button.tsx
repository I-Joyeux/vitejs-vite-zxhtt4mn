import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'light' | 'primary';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary',
  onClick 
}) => {
  const baseStyles = "px-8 py-3 rounded-full font-semibold transition-colors";
  const variants = {
    light: "bg-white text-blue-600 hover:bg-gray-100",
    primary: "bg-blue-600 text-white hover:bg-blue-700"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;