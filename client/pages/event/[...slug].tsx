import React, { Fragment, useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { NextSeo } from 'next-seo';
import { Dialog, Transition } from '@headlessui/react';

import Layout from '@/components/Layout';
import TitleBar from '@/components/pages/subevent/TitleBar';
import { SubeventHeader } from '@/components/pages/subevent/SubeventHeader';
import ReviewContainer from '@/components/pages/subevent/Review/ReviewContainer';
import FloatingContainer from '@/components/pages/subevent/FloatingContainer';
import NewReviewButton from '@/components/pages/subevent/NewReviewButton';
import { generateSubeventPageMeta } from '@/utils/seo';
import NewReviewWrapper from '@/components/pages/subevent/Review/NewReviewWrapper';

const SubEvent: React.FC = (props) => {
  const { data, meta }: any = props;
  const eventInfo = data;
  const router = useRouter();
  const slug = (router.query.slug as string[]) || [];
  const event_title = slug[0];
  const subevent_id = slug[1];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <NextSeo title={event_title} description={subevent_id} />
      <Layout>
        <TitleBar title="Reviews" backUrl={`/event/${event_title}`} />
        <SubeventHeader eventInfo={eventInfo} />
        <ReviewContainer event_name={event_title} subevent_id={subevent_id} />

        <FloatingContainer>
          <NewReviewButton onClick={() => setIsOpen(true)} />
        </FloatingContainer>

        <Transition.Root show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={setIsOpen}>
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>
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
                      subevent_id={subevent_id}
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
};

export async function getServerSideProps(context) {
  const slug = (context.query.slug as string[]) || [];
  const event_title = slug[0];
  const subevent_id = slug[1];

  const res = await axios.get(
    `https://bvent-seoul.web.app/events/${event_title}/${subevent_id}`,
  );
  const data = await res.data;
  const meta = await generateSubeventPageMeta(res.data);
  return { props: { data, meta } };
}

export default SubEvent;
