import React from 'react';
import styled from 'styled-components';
import { formatAddress } from '@utils/formatAddress';

type Props = {
  address: string | null | undefined;
};

const StyledWrapper = styled.div`
  width: fit-content;
  height: 25px;
  box-sizing: border-box;
  margin: 0;
  padding: 0 10px;
  border-style: solid;
  border-width: 0;
  border-radius: 99px;
  background-color: hsla(0, 0%, 100%, 0.1);
  color: #64d2ff;
  align-items: center;
  vertical-align: baseline;
`;

const Address = ({ address }: Props) => {
  return <StyledWrapper>{formatAddress(address)}</StyledWrapper>;
};

export default Address;