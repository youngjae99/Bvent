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

  console.log('rerender');

  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog
        className="fixed z-10 max-w-mobile w-full mx-auto inset-0 overflow-hidden"
        onClose={setShow}
      >
        <div className="absolute inset-0 overflow-hidden w-full">
          <div className="overflow-hidden inset-y-0 right-full max-w-mobile w-full">
            <Transition.Child
              className="absolute right-0 max-w-xs w-full"
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-3/4"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0 opacity-100"
              leaveTo="translate-x-full opacity-0"
            >
              <Dialog.Panel>
                <div className="flex h-full flex-col overflow-y-scroll bg-darkgray py-6 shadow-xl rounded-l-2xl">
                  <div>
                    <img
                      className="cursor-pointer"
                      src="/icons/close.svg"
                      width={12}
                      height={12}
                    />
                  </div>
                  <div className="relative mt-6 flex-1 px-4 sm:px-6 flex flex-col h-full">
                    <Profile.Primary>
                      <Profile.Primary.Image />
                      <Profile.Primary.Info>
                        <div className="title2 text-white">Sign in</div>
                        <div className="caption text-gray">
                          Sign in with your wallet
                        </div>
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
                      <MenuItem href="/now">Connect Wallet</MenuItem>
                      <MenuItem href="/events">Events</MenuItem>
                      <MenuItem href="/mypage">My Page</MenuItem>
                    </ul>
                    <LoginButton />
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
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
