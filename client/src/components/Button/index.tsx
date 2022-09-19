import React from 'react';

export type IButton = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

interface ButtonProps extends IButton {
  className?: string;
  outlined?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  className = '',
  children,
  outlined,
  disabled,
  ...rest
}: ButtonProps) => {
  if (disabled) {
    return (
      <button
        disabled={true}
        className={`disabled py-2 px-4 rounded-lg bg-gray-400 font-bold outline-none ring-opacity-75 text-white text-lg cursor-default`}
        {...rest}
      >
        {children}
      </button>
    );
  }
  if (outlined) {
    return (
      <button
        className={`py-2 px-4 rounded-lg border border-primary hover:bg-primary-dark outline-none ring-opacity-75 text-white text-lg ${className} transition-color duration-300`}
        {...rest}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      className={`py-2 px-4 rounded-lg bg-primary font-bold hover:bg-primary-dark outline-none ring-opacity-75 text-white text-lg ${className} transition-color duration-300`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
