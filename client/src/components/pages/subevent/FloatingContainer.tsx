import React from 'react';


const FloatingContainer = (props: { children: React.ReactNode }) => {
  return (
    <div className="max-w-mobile mx-auto w-full bottom-0 fixed -ml-5 p-8 flex justify-end z-10">
      {props.children}
    </div>
  );
};

export default FloatingContainer;
