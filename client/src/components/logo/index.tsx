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
        src="/images/logo/bvent-symbol-type-color.svg"
        alt="nextjs"
        width={width ? width : 100}
        height={height ? height : 100}
        style={{marginTop:"6px"}} //FIXME(aaron): change logo margin bottom
      />
    </a>
  );
};

export default Logo;