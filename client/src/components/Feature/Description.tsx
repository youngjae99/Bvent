import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 22px 7.5px;
  color: white;

  & > .type {
    display: flex;
    flex: 0 0 80px;
    height: 64px;
    justify-content: center;

    & .type-container {
      width: min-content;
    }
  }

  & p {
    white-space: pre-line;

    &.bold {
      font-weight: 590;
    }
  }

  & img {
    height: 42px;
  }
`;

interface DescriptionProps {
  src: string;
  type: string;
  title: string;
  description: string;
}

function Description({ src, type, title, description }: DescriptionProps) {
  return (
    <Container>
      <div className="type">
        <div className="grid gap type-container">
          <img src={src} height={42} className="justify-self-center" />
          <p className="body text-center">{type}</p>
        </div>
      </div>
      <div className="grid gap-3">
        <p className="body bold">{title}</p>
        <p className="caption">{description}</p>
      </div>
    </Container>
  );
}

export default Description;
