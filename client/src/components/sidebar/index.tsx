import React, { Fragment, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { Dialog, Disclosure, Transition } from '@headlessui/react';
import axios from 'axios';
import { ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/outline';

import { sidebarShowState } from '@/recoil/atoms/sidebar';
import { useWallet } from '@/hook/useWallet';
import { useWeb3React } from '@web3-react/core';
import Profile from '@/components/Profile';
import { formatAccount } from '@/utils/wallet';
import TimezoneBox from './TimezoneBox';
import { useRouter } from 'next/router';
import { userState } from '@/recoil/atoms/user';
import UserAPI from '@/api/user';

type Props = any;

const MenuItem = ({ href, onClick, selected, children, menu }: any) => (
  <div className="block mt-1 first:mt-0 cursor-pointer outline-none">
    <li
      onClick={onClick}
      className={`border-pink border-solid text-white py-4 px-4 rounded-xl ${
        selected
          ? 'border'
          : 'border-0 hover:bg-white hover:bg-opacity-10 transition-all'
      }`}
    >
      {href ? (
        <Link href={href}>
          <div className="flex w-full items-center justify-end">
            <div className="body text-right text-gray-400 m-0 w-full">
              {children}
            </div>
          </div>
        </Link>
      ) : (
        <div className="flex w-full items-center justify-end">
          <div className="body text-right text-gray-400 m-0 w-full">
            {children}
          </div>
        </div>
      )}
    </li>
  </div>
);

export const Sidebar = (props: Props) => {
  const [userInfoState, setUserInfoState] = useRecoilState(userState);
  const {
    bio = 'Bventer',
    username,
    total_coin = 0,
    profile_pic,
    isSignIn,
  } = userInfoState;

  const [show, setShow] = useRecoilState(sidebarShowState);
  const { connectMetamaskWallet, disconnectWallet } = useWallet();
  const { account } = useWeb3React();
  const router = useRouter();

  const handleLogin = async () => {
    await connectMetamaskWallet();

    if (account) {
      try {
        await axios.post(`/api/auth/login`, {
          username: account,
        });
        const userInfo = await UserAPI.getMyInfo();
        setUserInfoState({
          ...userInfo,
          isSignIn: true,
        });
      } catch (error) {
        await axios.post(`/api/auth/register`, {
          username: account,
          address: account,
        });
        try {
          await axios.post(`/api/auth/login`, {
            username: account,
          });
          const userInfo = await UserAPI.getMyInfo();
          setUserInfoState({
            ...userInfo,
            isSignIn: true,
          });

          router.push('/mypage?edit=true', '/mypage');
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  const handleLogout = async () => {
    setUserInfoState({
      isSignIn: false,
    });
    disconnectWallet();
    document.cookie = 'idToken=; Max-Age=-99999999;';
  };

  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog
        className="fixed z-10 max-w-mobile w-full mx-auto inset-x-0 top-0 bottom-0 overflow-hidden"
        onClose={setShow}
      >
        <div className="absolute inset-0 overflow-hidden w-full">
          <div className="absolute overflow-hidden inset-y-0 right-0 max-w-mobile w-full h-full">
            <Transition.Child
              className="absolute right-0 w-96 max-w-full h-full"
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
                      <Profile.Primary.Image src={profile_pic} />
                      <Profile.Primary.Info>
                        <div className="title2 text-white">
                          {isSignIn ? `${username?.slice(0, 10)}` : 'Sign In'}
                        </div>
                        <div className="caption text-gray">
                          {isSignIn ? bio : 'Sign in with your wallet'}
                        </div>
                      </Profile.Primary.Info>
                    </Profile.Primary>
                    <div className="headline text-white flex gap-1 px-2 mt-5">
                      <span>Total Rewards</span>
                      <span className="text-pink">
                        {isSignIn ? total_coin : 0}
                      </span>
                    </div>
                    <ul className="f-m-m flex-1 mt-5">
                      <MenuItem href="/" selected onClick={() => setShow(!show)}>
                        Home
                      </MenuItem>
                      <MenuItem onClick={isSignIn ? handleLogout : handleLogin}>
                        {isSignIn ? 'Disconnect Wallet' : 'Connect Wallet'}
                      </MenuItem>
                      <MenuItem>
                        <Disclosure>
                          {({ open }) => (
                            <div className="grid gap-5">
                              <Disclosure.Button className="w-full flex justify-end gap-2 items-center focus:outline-none">
                                <span>Events</span>
                                <ChevronRightIcon
                                  className={`${
                                    open ? 'rotate-90 transform' : ''
                                  } h-4`}
                                />
                              </Disclosure.Button>
                              <Disclosure.Panel className="w-full flex justify-end gap-2.5">
                                <Link href="/upcoming">
                                  <div className="body rounded-lg border border-gray p-4 hover:bg-primary" onClick={() => setShow(!show)}>
                                    Upcoming
                                  </div>
                                </Link>
                                <Link href="/current">
                                  <div className="body rounded-lg border border-gray p-4 hover:bg-primary" onClick={() => setShow(!show)}>
                                    Current
                                  </div>
                                </Link>
                                <Link href="/past">
                                  <div className="body rounded-lg border border-gray p-4 hover:bg-primary" onClick={() => setShow(!show)}>
                                    Past
                                  </div>
                                </Link>
                              </Disclosure.Panel>
                            </div>
                          )}
                        </Disclosure>
                      </MenuItem>
                      <MenuItem href="/mypage" onClick={() => setShow(!show)}>My page</MenuItem>
                    </ul>
                    <TimezoneBox />
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
