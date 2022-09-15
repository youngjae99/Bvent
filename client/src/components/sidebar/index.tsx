import React, { Fragment, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

import { sidebarShowState } from '@/recoil/atoms/sidebar';
import { useWallet } from '@/hook/useWallet';
import { useWeb3React } from '@web3-react/core';
import { LoginButton } from './loginButton';
import { TimeBox } from './timeBox';
import Profile from '../Profile';

type Props = any;

const MenuItem = ({ href, selected, children }: any) => (
  <a href={href}>
    <li
      className={`text-white py-4 px-4 hover:bg-gray-200 rounded-xl transition-all ${
        selected ? 'border-solid border border-pink' : ''
      }`}
    >
      <div className="flex w-full items-center justify-end">
        <p className="body text-right text-gray-400 m-0">{children}</p>
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
      <Dialog
        as="div"
        className="relative z-10 max-w-mobile mx-auto"
        onClose={setShow}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="mx-auto fixed inset-0 bg-gray-500 bg-opacity-75 max-w-mobile transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden mx-auto max-w-mobile">
          <div className="absolute inset-0 overflow-hidden mx-auto max-w-mobile w-full">
            <div className="pointer-events-none absolute inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-xs">
                  {/* <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  ></Transition.Child> */}
                  <div className="flex h-full flex-col overflow-y-scroll bg-darkgray py-6 shadow-xl">
                    <div className="absolute top-0 right-0 -ml-8 flex pt-4 pr-4 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md text-gray-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setShow(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="px-4 sm:px-6">
                      {/* <Dialog.Title className="text-lg font-medium text-gray-900">
                        Panel title
                      </Dialog.Title> */}
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6 flex flex-col h-full">
                      <Profile.Primary>
                        <Profile.Primary.Image />
                        <Profile.Primary.Info>
                          <div className="title2 text-white">Username</div>
                          <div className="caption text-gray">caption</div>
                        </Profile.Primary.Info>
                      </Profile.Primary>
                      <div className="headline text-white flex gap-1">
                        <span>Total Rewards</span>
                        <span className="text-pink">{7}</span>
                      </div>
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

    // <div
    //   className={
    //     show
    //       ? 'w-full h-full fixed z-40  transform  translate-x-0 '
    //       : '   w-full h-full fixed z-40  transform -translate-x-full'
    //   }
    // >
    //   <div
    //     className="bg-gray-800 opacity-50 inset-0 fixed w-full h-full"
    //     onClick={() => setShow(!show)}
    //   />
    //   <div className="w-64 z-20 absolute right-0 top-0 bg-gray-900 text-white shadow flex-col justify-between transition duration-150 ease-in-out h-full">
    //     <div className="flex flex-col justify-between h-full">
    //       <div className="px-6 pt-4">
    //         <div className="flex items-center justify-end">
    //           <div
    //             id="cross"
    //             className=" text-white cursor-pointer"
    //             onClick={() => setShow(!show)}
    //           >
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               className="icon icon-tabler icon-tabler-x"
    //               width={24}
    //               height={24}
    //               viewBox="0 0 24 24"
    //               strokeWidth={1}
    //               stroke="currentColor"
    //               fill="none"
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //             >
    //               <path stroke="none" d="M0 0h24v24H0z" />
    //               <line x1={18} y1={6} x2={6} y2={18} />
    //               <line x1={6} y1={6} x2={18} y2={18} />
    //             </svg>
    //           </div>
    //         </div>
    //         <ul className="f-m-m">
    //           <MenuItem href="/" selected>
    //             Home
    //           </MenuItem>
    //           <MenuItem href="/now">Ongoing Events</MenuItem>
    //           <MenuItem href="/past">Past Events</MenuItem>
    //           <MenuItem href="/upcomings">Upcoming Events</MenuItem>
    //           <MenuItem href="/mypage">My Page</MenuItem>
    //           <LoginButton />
    //         </ul>
    //       </div>
    //       <div className="w-full">
    //         <TimeBox />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
