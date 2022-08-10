import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { BiArrowBack, BiShareAlt } from 'react-icons/bi';

const TitleBarWrapper = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 0;

  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.5rem;
`;

type Props = {
  backUrl: string;
};

const TitleBar = (props: Props) => {
  const { backUrl } = { ...props };

  return (
    <TitleBarWrapper>
      <Link href={backUrl}>
        <BiArrowBack style={{ cursor: 'pointer' }}/>
      </Link>
      <p>Session Reviews</p>
      <a href="/">
        <BiShareAlt style={{ cursor: 'pointer' }}/>
      </a>
    </TitleBarWrapper>
  );
};

export default TitleBar;
