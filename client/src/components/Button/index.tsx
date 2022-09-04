import React from 'react';

export type IButton = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button: React.FC<IButton> = ({
  className = '',
  children,
  ...rest
}: any) => {
  return (
    <button
      className={`py-2 px-4 rounded-lg bg-blue-400 font-bold text- hover:bg-blue-500 outline-none ring-opacity-75 ring-green-400 focus:ring text-white text-lg ${className} transition-all`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
