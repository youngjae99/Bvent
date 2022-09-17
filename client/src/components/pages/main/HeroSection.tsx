import React from 'react';
import { GradientText } from '@/components/Text/GradientText';

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center" style={{ height: '70vh' }}>
      <div className="ml-0 md:ml-10">
        <h1 className="text-6xl	max-w-lg">
          Discover all <GradientText>Blockchain Events</GradientText> from here
        </h1>
      </div>
      {/* <p className="text-white mt-3 text-xl">You are in {timezone}</p> */}
      {/* <CurrentTime /> */}
    </div>
  );
};

export default HeroSection;
