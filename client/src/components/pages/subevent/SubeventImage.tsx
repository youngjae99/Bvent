import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

export const StyledImageWrapper = styled.div`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0), black);
`;

export const StyledImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

export const SubeventImage = ({ src }: { src: string }) => {
  return (
    <StyledImageWrapper>
      <Image
        src={src}
        width={600}
        height={400}
        style={{ borderRadius: '10px' }}
      />
    </StyledImageWrapper>
  );
};
