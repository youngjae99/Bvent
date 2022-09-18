import React from 'react';
import { useWeb3React } from '@web3-react/core';
import styled from 'styled-components';

import Address from '../Address';
import axios from 'axios';

// interface Props {
//     onPress: any;
//     src: any;
//     width: string;
//     height: string;
//   }

const StyledWrapper = styled.div`
  color: white;
  background-color: var(--colors-background);
`;

const RequiredBox = styled.div`
  width: fit-content;
  height: 25px;
  box-sizing: border-box;
  margin: 0;
  padding: 0 10px;
  border-style: solid;
  border-width: 0;
  border-radius: 99px;
  background-color: ${(props: { required: boolean }) =>
    props.required ? 'hsla(0,0%,100%,.1)' : 'hsla(0,0%,100%,.1)'};
  color: ${(props: { required: boolean }) =>
    props.required ? '#64d2ff' : 'white'};
  align-items: center;
  vertical-align: baseline;
`;

type FieldSetProps = {
  title: string;
  required?: boolean;
  description: string;
};

const FieldSet = ({ title, required, description }: FieldSetProps) => {
  return (
    <div className="my-10">
      <div className="flex items-center">
        {' '}
        <h1>{title}</h1>
        {required ? (
          <RequiredBox required>Required</RequiredBox>
        ) : (
          <RequiredBox required={false}>Optional</RequiredBox>
        )}
      </div>
      <p className="text-black-40">{description}</p>
      <input />
    </div>
  );
};

export const AboutMe = () => {
  const { active, account, connector, chainId } = useWeb3React();

  // axios.get('/api/user/myself', {})

  return (
    <StyledWrapper>
      <Address address={account} />
      <FieldSet
        title="Name"
        required
        description="What do you want to be known as? This can be either you personally, or the name of a project you’re looking to create."
      />
      <FieldSet
        title="Bio"
        description="A brief summary of who you are. Accepts basic markdown."
      />
      <FieldSet
        title="Name"
        description="What do you want to be known as? This can be either you personally, or the name of a project you’re looking to create."
      />
    </StyledWrapper>
  );
};
