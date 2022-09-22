import React, { Fragment, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { NextSeo } from 'next-seo';
import { Dialog, Transition } from '@headlessui/react';

import { generateSubeventPageMeta } from '@/utils/seo';
import Layout from '@/components/Layout';
import TitleBar from '@/components/pages/subevent/TitleBar';
import { SubeventHeader } from '@/components/pages/subevent/SubeventHeader';
import ReviewContainer from '@/components/pages/review/ReviewContainer';
import FloatingContainer from '@/components/pages/subevent/FloatingContainer';
import NewReviewButton from '@/components/pages/subevent/NewReviewButton';
import NewReviewWrapper from '@/components/pages/review/NewReviewWrapper';
import { Subevent as SubeventType } from '@/types/event';

interface Props {
  data: SubeventType;
}

const SubEvent: React.FC<Props> = (props: Props) => {
  const { data } = props;
  const eventInfo = data;
  const router = useRouter();
  const slug = (router.query.slug as string[]) || [];
  const event_title = slug[0];
  const subevent_id = slug[1];
  const [isOpen, setIsOpen] = useState(false);

  const metadata = generateSubeventPageMeta(eventInfo);

  return (
    <>
      <NextSeo
        title={metadata.title}
        description={metadata.description}
        openGraph={metadata.openGraph}
      />
      <Layout>
        <TitleBar title="Reviews" backUrl={`/event/${event_title}`} />
        <SubeventHeader eventInfo={eventInfo} />
        <ReviewContainer subevent_id={subevent_id} />

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
  const subevent_id = slug[1];

  const res = await axios.get(
    `https://api.bventdao.xyz/subevent?subevent_id=${subevent_id}`,
  );
  const data = await res.data;
  return { props: { data } };
}

export default SubEvent;
