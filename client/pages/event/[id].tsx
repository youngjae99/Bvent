import React, { Fragment, useState } from 'react';
import { NextSeo } from 'next-seo';
import axios from 'axios';
import { Dialog, Transition } from '@headlessui/react';

import Layout from '@/components/Layout';
import EventTitleWrapper from '@/components/pages/event/EventTitle';
import { generateEventPageMeta } from '@/utils/seo';
import ReviewContainer from '@/components/pages/review/ReviewContainer';
import FloatingContainer from '@/components/pages/subevent/FloatingContainer';
import NewReviewButton from '@/components/pages/subevent/NewReviewButton';
import NewReviewWrapper from '@/components/pages/review/NewReviewWrapper';

import TitleBar from '@/components/pages/event/TitleBar';
import { EventHeader } from '@/components/pages/event/EventHeader';
import TimeLineWrapper from '@/components/pages/event/timeline/TimeLineWrapper';

const Event: React.FC = (props) => {
  const { eventInfo, subevents }: any = props;
  const event_title = eventInfo.event_title;
  const metadata = generateEventPageMeta(eventInfo);
  const [isOpen, setIsOpen] = useState(false);
  const event_id = eventInfo.event_id;

  console.log(eventInfo);

  if (subevents.length === 0) {
    return (
      <>
        <NextSeo
          title={metadata.title}
          description={metadata.description}
          openGraph={metadata.openGraph}
        />
        <Layout>
          <TitleBar title="Events Talk" backUrl={`/`} />
          <EventHeader eventInfo={eventInfo} />
          <ReviewContainer event_id={event_id} />

          <FloatingContainer>
            <NewReviewButton onClick={() => setIsOpen(true)} />
          </FloatingContainer>

          <Transition.Root show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setIsOpen}>
              <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  >
                    <Dialog.Panel>
                      <NewReviewWrapper
                        event_name={event_title}
                        event_id={event_id}
                        onClose={() => setIsOpen(false)}
                      />
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition.Root>
        </Layout>
      </>
    );
  }


  // Timeline View (current event)
  return (
    <>
      <NextSeo
        title={metadata.title}
        description={metadata.description}
        openGraph={metadata.openGraph}
      />
      <Layout>
        <div className="flex flex-row justify-start">
          <p className="text-2xl text-white text-center">Event Details</p>
        </div>
        <EventTitleWrapper>{event_title}</EventTitleWrapper>
        <TimeLineWrapper eventInfo={eventInfo} subevents={subevents} />
      </Layout>
    </>
  );
};

export async function getServerSideProps(context) {
  const { id }: any = context.query;
  const event_title = id as string;
  const res = await axios.get(`https://api.bventdao.xyz/events/${event_title}`);
  const data = await res.data;
  const eventInfo = data.event_info;
  const subevents = data.subevents;
  console.log(eventInfo, subevents);
  return { props: { eventInfo, subevents } };
}

export default Event;
