import React from 'react';
import styled from 'styled-components';

export const StyledImageWrapper = styled.div`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0), black);
`;

export const StyledImage = styled.img`
  width: 100%;
`;

export const SubeventImage = ({ src }: any) => {
  return (
    <StyledImageWrapper>
      <StyledImage src={src} alt="subeventImage"/>
    </StyledImageWrapper>
  );
};
