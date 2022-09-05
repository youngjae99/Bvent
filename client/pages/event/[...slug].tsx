import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { NextSeo } from 'next-seo';

import Layout from '@/components/Layout';
import TitleBar from '@/components/eventpage/Subevent/TitleBar';
import { SubeventHeader } from '@/components/eventpage/Subevent/SubeventHeader';
import ReviewContainer from '@/components/eventpage/Subevent/Review/ReviewContainer';
import { generateSubeventPageMeta } from '@/utils/seo';

const SubEvent: React.FC = (props) => {
  const { data }: any = props;
  const eventInfo = data;
  const router = useRouter();
  const slug = (router.query.slug as string[]) || [];
  const event_title = slug[0];
  const subevent_id = slug[1];

  return (
    <>
      <NextSeo {...generateSubeventPageMeta(eventInfo)} />
      <Layout>
        <TitleBar title="Session Reviews" backUrl={`/event/${event_title}`} />
        <SubeventHeader eventInfo={eventInfo} />
        <ReviewContainer event_name={event_title} subevent_id={subevent_id} />
      </Layout>
    </>
  );
};

export async function getServerSideProps(context) {
  const slug = (context.query.slug as string[]) || [];
  const event_title = slug[0];
  const subevent_id = slug[1];

  const res = await axios.get(
    `https://bvent-seoul.web.app/events/${event_title}/${subevent_id}`,
  );
  const data = await res.data;
  return { props: { data } };
}

export default SubEvent;
