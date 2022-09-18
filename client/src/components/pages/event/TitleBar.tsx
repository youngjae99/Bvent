import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';

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
  title: string;
  backUrl: string;
};

const TitleBar = (props: Props) => {
  const { title, backUrl } = { ...props };

  return (
    <TitleBarWrapper>
      <Link href={backUrl}>
        <ChevronLeftIcon style={{ width:'28px', cursor: 'pointer' }}/>
      </Link>
      <p>{title}</p>
      <a href="/">
        <ChevronLeftIcon style={{ cursor: 'pointer', visibility: 'hidden'}}/>
      </a>
    </TitleBarWrapper>
  );
};

export default TitleBar;
