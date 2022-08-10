import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

type LogoType = {
  width: number;
  height: number;
};

const Logo = (props: LogoType) => {
  const { width, height } = props;
  return (
    <a href="/">
      <Image
        src="/icons/bvent_logo.png"
        alt="nextjs"
        width={width ? width : 200}
        height={height ? height : 100}
      />
    </a>
  );
};

export default Logo;