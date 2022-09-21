import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import {
  UserCircleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@heroicons/react/24/outline';
import { parseTime, parseDate } from '@/utils/parseTime';
import { useRecoilState } from 'recoil';
import { convertTime } from '@/utils/parseTime';
import { timezoneState } from '@/recoil/atoms/timezone';

type Props = {
    date: any;
};

const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
`;


const UserTime = styled.div`
  text-align: center;
  width: 3rem;
  /* border-right: 1px dashed; */
`;

const EventTime = styled.div`
  text-align: center;
  width: 3rem;
`;

const EventTitle = styled.p`
  cursor: pointer;
  font-size: 1.2rem;
  transition: 0.2s ease-in-out;
`;


const TimelineDate = (props: Props) => {
  const { date } = props;

  return (
    <CardWrapper className="mb-3 text-white transition-all">
      <div className="flex flex-row w-24 mr-2">no</div>;
      <div className="mb-3 flex-1 rounded-lg hover:bg-gray-900">{date}</div>
    </CardWrapper>
  );
};

export default TimelineDate;
