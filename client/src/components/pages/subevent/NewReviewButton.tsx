import React from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';

const NewReviewButton = (props: any) => {
  return (
    <div className="w-16 h-16 rounded-full flex justify-center items-center bg-primary hover:bg-primary-dark text-white cursor-pointer transition-color duration-300" style={{filter: "drop-shadow(0px 1px 8px #EE5390)"}} onClick={props.onClick}>
      <PlusIcon className="w-10"/>
    </div>
  );
};

export default NewReviewButton;
