import React, { Fragment, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

import { sidebarShowState } from '@/recoil/atoms/sidebar';
import { useWallet } from '@/hook/useWallet';
import { useWeb3React } from '@web3-react/core';
import { LoginButton } from './loginButton';
import { TimeBox } from './timeBox';

type Props = any;

const MenuItem = ({ href, selected, children }: any) => (
  <a href={href}>
    <li className="text-white py-4 hover:bg-white hover:bg-opacity-10 rounded-xl transition-all">
      <div className="flex items-center">
        {selected ? (
          <p className="text-primary ml-3 text-lg">{children}</p>
        ) : (
          <p className="text-gray-500 ml-3 text-lg">{children}</p>
        )}
      </div>
    </li>
  </a>
);

export const Sidebar = (props: Props) => {
  const { connectMetamaskWallet } = useWallet();
  const { active, account, connector, chainId } = useWeb3React();
  const [show, setShow] = useRecoilState(sidebarShowState);
  const [product, setProduct] = useState(false);
  const [deliverables, setDeliverables] = useState(false);
  const [profile, setProfile] = useState(false);

  const onClickMetaMask = () => {
    console.log('pressed!');
    connectMetamaskWallet();
  };

  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setShow}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-white bg-opacity-10 transition-opacity" style={{backdropFilter:"blur(10px)"}}/>
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 "
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 "
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-xs">
                  <div className="flex h-full flex-col overflow-y-scroll bg-black py-6 shadow-xl">
                    <div className="absolute top-0 right-0 -ml-8 flex pt-4 pr-4">
                      <button
                        type="button"
                        className="rounded-md text-gray-400 hover:text-white focus:outline-none"
                        onClick={() => setShow(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="px-4">
                    </div>
                    <div className="relative mt-6 flex-1 px-4 flex flex-col h-full">
                      <ul className="f-m-m flex-1">
                        <MenuItem href="/" selected>
                          Home
                        </MenuItem>
                        <MenuItem href="/now">Ongoing Events</MenuItem>
                        <MenuItem href="/past">Past Events</MenuItem>
                        <MenuItem href="/upcomings">Upcoming Events</MenuItem>
                        <MenuItem href="/mypage">My Page</MenuItem>
                      </ul>
                      <LoginButton />
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
