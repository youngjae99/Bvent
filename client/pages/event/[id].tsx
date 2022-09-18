import React from 'react';
import { NextSeo } from 'next-seo';
import axios from 'axios';

import Layout from '@/components/Layout';
import SubeventCard from '@/components/pages/event/SubeventCard';
import EventTitleWrapper from '@/components/pages/event/EventTitle';
import { useRecoilState } from 'recoil';
import { timezoneState } from '@/recoil/atoms/timezone';
import { generateEventPageMeta } from '@/utils/seo';
import EventAPI from '@/api/event';

const Event: React.FC = (props) => {
  const { eventInfo, subevents }: any = props;
  console.log(eventInfo);
  const event_title = eventInfo.event_title;
  const [timezone] = useRecoilState(timezoneState);

  const metadata = generateEventPageMeta(eventInfo);

  if (subevents == null) {
    return (
      <>
        <Layout>
          <div className="flex flex-row justify-start">
            <p className="text-2xl text-white text-center">Event Details</p>
          </div>
          <EventTitleWrapper>{event_title}</EventTitleWrapper>
          <div className="text-white" style={{height:"400px"}}>Event Not ready</div>
        </Layout>
      </>
    );
  }

  return (
    <>
      <NextSeo title={metadata.title} description={metadata.description} openGraph={metadata.openGraph} />
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
