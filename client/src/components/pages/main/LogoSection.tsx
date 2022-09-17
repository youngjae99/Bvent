import React from 'react';
import { GradientText } from '@/components/Text/GradientText';

const LogoSection = () => {
  return (
    <div className="flex flex-col justify-center items-center text-white" style={{height:"200px"}}>
      <img src="images/logo/bvent-logotype.png" width="100px" className='mb-4'/>
      <img src="images/All About Blockchain Events.png"/>
    </div>
  );
};

export default LogoSection;
