import React, { ReactNode } from 'react';

interface PrimaryProps {
  children: ReactNode;
}

interface ImageProps {
  src?: string;
}

interface InfoProps {
  children: ReactNode;
}

const Primary = ({ children }: PrimaryProps) => {
  return <div className="flex gap-x-10.5px">{children}</div>;
};

const Image = ({ src = '/icons/default-profile-icon.svg' }: ImageProps) => {
  return <img className="rounded-full" src={src} width={52} height={52} />;
};

const Info = ({ children }: InfoProps) => {
  return <div className="flex flex-col gap-px justify-center">{children}</div>;
};

Primary.Info = Info;
Primary.Image = Image;

export default Primary;
