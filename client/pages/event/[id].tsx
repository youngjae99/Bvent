import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import axios from 'axios';

import Layout from '@/components/Layout';
import SubeventCard from '@/components/pages/event/SubeventCard';
import EventTitleWrapper from '@/components/pages/event/EventTitle';
import { useRecoilState } from 'recoil';
import { timezoneState } from '@/recoil/atoms/timezone';
import { Event as EventType } from '@/types/event';
import { Subevent as SubeventType } from '@/types/event';
import { generateEventPageMeta } from '@/utils/seo';

const Event: React.FC = (props) => {
  const { eventInfo, subevents }: any = props;
  const event_title = eventInfo.event_title;
  const [timezone] = useRecoilState(timezoneState);

  return (
    <>
      <NextSeo {...generateEventPageMeta(event_title)} />
      <Layout>
        <div className="flex flex-row justify-start">
          <p className="text-2xl text-white text-center">Event Details</p>
        </div>
        <EventTitleWrapper>{event_title}</EventTitleWrapper>
        <div>
          <div className="flex flex-row w-24 mr-2 text-secondary font-bold">
            <div className="w-12 text-center">{timezone}</div>
            <div className="w-12 text-center">GMT</div>
          </div>
          <div className="mb-3 flex-1"></div>
          {eventInfo &&
            Object.keys(subevents)
              .sort(
                (a, b) =>
                  subevents[a].subevent_time - subevents[b].subevent_time,
              )
              .map((key) => (
                <SubeventCard key={key} subevent={subevents[key]} />
              ))}
        </div>
      </Layout>
    </>
  );
};

export async function getServerSideProps(context) {
  const { id }: any = context.query;
  const event_title = id as string;
  const res = await axios.get(
    `https://api.bventdao.xyz/subevent?event=${event_title}`,
  );
  const data = await res.data;
  const eventInfo = data.event_info;
  const subevents = data.subevents;
  console.log(eventInfo, subevents);
  return { props: { eventInfo, subevents } };
}

export default Event;
