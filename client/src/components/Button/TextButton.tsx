import React from 'react';

export type IButton = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const TextButton: React.FC<IButton> = ({
  className = '',
  children,
  disabled,
  ...rest
}: any) => {
  if(disabled){
    return (<button
      disabled={true}
      className={`disabled py-2 px-4 rounded-lg bg-gray-400 font-bold text-outline-none ring-opacity-75 text-white text-lg cursor-default`}
      {...rest}
    >
      {children}
    </button>);
  }
  return (
    <button
      className={`py-2 px-4 rounded-lg text-primary font-bold hover:text-primary-dark outline-none ring-opacity-75 text-white text-lg ${className} transition-color duration-300`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default TextButton;
