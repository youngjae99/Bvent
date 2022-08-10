import React from 'react';
import styled from 'styled-components';
import { BiArrowBack } from 'react-icons/bi';

const StyledHeader = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1rem 0;

  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.5rem;
`;

type Props = {};

const SubeventHeader = (props: Props) => {
  return (
    <StyledHeader>
      <div>
        <BiArrowBack />
      </div>
      <p>Session Reviews</p>
    </StyledHeader>
  );
};

export default SubeventHeader;
