import React, { useEffect } from 'react';
import Lottie from 'lottie-react';
import { GradientText } from '@/components/Text/GradientText';
import Button from '@/components/Button';
import animationData from './51771-scroll-down-white.json';

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center" style={{ height: '100vh' }}>
      <div className="flex flex-col justify-center" style={{ height: '60vh' }}>
        <h1 className="text-5xl	max-w-lg">
          Discover all <GradientText>Blockchain Events</GradientText> from here
        </h1>
      </div>
      <div
        className="flex flex-col justify-center items-center"
        style={{ height: '40vh' }}
      >
        <Button outlined>Check all Events</Button>
        <Lottie
          animationData={animationData}
          loop={true}
          style={{ width: '100px' }}
        />
      </div>
    </div>
  );
};

export default HeroSection;
