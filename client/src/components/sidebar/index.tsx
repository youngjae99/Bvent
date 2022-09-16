import React, { Fragment, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { Dialog, Transition } from '@headlessui/react';
import axios from 'axios';
import { XMarkIcon } from '@heroicons/react/24/outline';

import { sidebarShowState } from '@/recoil/atoms/sidebar';
import { useWallet } from '@/hook/useWallet';
import { useWeb3React } from '@web3-react/core';
import { LoginButton } from './loginButton';
import { TimeBox } from './timeBox';
import Profile from '../Profile';
import { formatAccount } from '@/utils/wallet';

type Props = any;

const MenuItem = ({ href, onClick, selected, children }: any) => (
  <a className="block mt-1 first:mt-0 cursor-pointer" href={href}>
    <li
      onClick={onClick}
      className={`border-pink border-solid text-white py-4 px-4 rounded-xl transition-bg ${
        selected ? 'border' : 'border-0'
      } `}
    >
      <div className="flex w-full items-center justify-end">
        <p className="body text-right text-gray-400 m-0">{children}</p>
      </div>
    </li>
  </a>
);

export const Sidebar = (props: Props) => {
  const [show, setShow] = useRecoilState(sidebarShowState);
  const { connectMetamaskWallet, disconnectWallet } = useWallet();
  const { active, account, connector, chainId } = useWeb3React();

  useEffect(() => {
    console.log(active, account);
  }, [active]);

  const handleLogin = async () => {
    await connectMetamaskWallet();
    const address = '0x163B3Bd064023B017bB6d06295591554D380b5C8';
    console.log(account);

    const frm = new FormData();
    frm.append('username', address);
    frm.append('password', '990326');
    frm.append('loginType', 'wallet');
    const loginRes = await axios
      .post(`https://api.bventdao.xyz/auth/login`, {
        username: address,
        password: '990326',
        loginType: 'wallet',
      })
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        console.log(error.response);
      });
    sessionStorage.setItem('session', loginRes.idToken); // TODO(aaron): change to cookie
  };

  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog
        className="fixed z-10 max-w-mobile w-full mx-auto inset-x-0 top-0 bottom-6 overflow-hidden"
        onClose={setShow}
      >
        <div className="absolute inset-0 overflow-hidden w-full">
          <div className="absolute overflow-hidden inset-y-0 right-0 max-w-mobile w-full h-full">
            <Transition.Child
              className="absolute right-0 max-w-xs w-full h-full"
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-3/4"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0 opacity-100"
              leaveTo="translate-x-full opacity-0"
            >
              <Dialog.Panel as={Fragment}>
                <div className="flex h-full flex-col px-3.5 py-5 erflow-y-scroll bg-darkgray shadow-xl rounded-l-2xl">
                  <div>
                    <img
                      className="cursor-pointer"
                      src="/icons/close.svg"
                      width={12}
                      height={12}
                      onClick={() => setShow(!show)}
                    />
                  </div>
                  <div className="relative mt-12 flex-1 px-2 flex flex-col h-full">
                    <Profile.Primary>
                      <Profile.Primary.Image />
                      <Profile.Primary.Info>
                        <div className="title2 text-white">
                          {formatAccount(account)}
                        </div>
                        <div className="caption text-gray">
                          Sign in with your wallet
                        </div>
                      </Profile.Primary.Info>
                    </Profile.Primary>
                    <div className="headline text-white flex gap-1 px-2 mt-5">
                      <span>Total Rewards</span>
                      <span className="text-pink">{7}</span>
                    </div>
                    <ul className="f-m-m flex-1 mt-5">
                      <MenuItem href="/" selected>
                        Home
                      </MenuItem>
                      <MenuItem onClick={handleLogin}>Connect Wallet</MenuItem>
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
