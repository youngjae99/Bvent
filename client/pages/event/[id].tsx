import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import axios from 'axios';

import Layout from '@/components/Layout';
import SubeventCard from '@/components/eventpage/Subevent/SubeventCard';
import { EventTitleWrapper } from '@/components/eventpage/Card';
import { useRecoilState } from 'recoil';
import { timezoneState } from '@/recoil/atoms/timezone';
import { Event as EventType } from '@/types/event';
import { Subevent as SubeventType } from '@/types/event';
import { generateEventPageMeta } from '@/utils/seo';


const Event: React.FC = (props) => {
  const { data }: any = props;
  const eventInfo = data;
  const router = useRouter();
  const event_title = router.query.id as string;
  const [timezone] = useRecoilState(timezoneState);
  console.log(router.query.id);
  console.log(data);

  return (
    <>
      <NextSeo {...generateEventPageMeta(event_title)} />
      <Layout>
        <div className="flex flex-row justify-center mb-4">
          <div className="flex flex-col justify-center items-end">
            <p className="text-2xl font-bold text-white text-center">
              Ongoing Conferences
            </p>
            <p className="text-white font-medium text-center">Timeline</p>
          </div>
        </div>
        <div className="m-8">
          <EventTitleWrapper>{event_title}</EventTitleWrapper>
        </div>
        <p className="text-white">{}</p>
        <div>
          <div className="flex flex-row w-24 mr-2 text-green-400 font-bold">
            <div className="w-12 text-center">{timezone}</div>
            <div className="w-12 text-center">GMT</div>
          </div>
          <div className="mb-3 flex-1"></div>
          {eventInfo &&
            Object.keys(eventInfo)
              .sort(
                (a, b) =>
                  eventInfo[a].subevent_time - eventInfo[b].subevent_time,
              )
              .map((key) => (
                <SubeventCard key={key} subevent={eventInfo[key]} />
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
    `https://bvent-seoul.web.app/events/${event_title}`,
  );
  const data = await res.data;
  return { props: { data } };
}

export default Event;
