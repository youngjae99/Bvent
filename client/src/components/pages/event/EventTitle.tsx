import React, { ReactNode } from 'react';

const EventTitleWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="width-full text-center text-primary text-xl">
      {children}
    </div>
  );
};

export default EventTitleWrapper;
