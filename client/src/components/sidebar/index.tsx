import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { sidebarShowState } from '@recoil/atoms/sidebar';
import { useWallet } from '@hook/useWallet';
import { useWeb3React } from '@web3-react/core';
import { LoginButton } from './loginButton';

type Props = {};

const MenuItem = ({ href, selected, children }: any) => (
  <a href={href}>
    <li className="text-white py-4">
      <div className="flex items-center">
        {selected ? (
          <p className="text-indigo-500 ml-3 text-lg">{children}</p>
        ) : (
          <p className="text-gray-400 ml-3 text-lg hover:text-indigo-300">
            {children}
          </p>
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
  const [time, setTime] = useState('09:00:00');

  useEffect(() => {
    setTimeout(() => {
      getDate();
    }, 1000);
  }, [time]);

  const getDate = () => {
    const today = new Date();
    const date =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getDate() +
      '  ' +
      today.getHours() +
      ':' +
      today.getMinutes() +
      ':' +
      today.getSeconds();
    setTime(date);
  };

  const onClickMetaMask = () => {
    console.log('pressed!');
    connectMetamaskWallet();
  };

  return (
    <div
      className={
        show
          ? 'w-full h-full fixed z-40  transform  translate-x-0 '
          : '   w-full h-full fixed z-40  transform -translate-x-full'
      }
    >
      <div
        className="bg-gray-800 opacity-50 inset-0 fixed w-full h-full"
        onClick={() => setShow(!show)}
      />
      <div className="w-64 z-20 absolute right-0 top-0 bg-gray-900 text-white shadow flex-col justify-between transition duration-150 ease-in-out h-full">
        <div className="flex flex-col justify-between h-full">
          <div className="px-6 pt-4">
            <div className="flex items-center justify-end">
              <div
                id="cross"
                className=" text-white cursor-pointer"
                onClick={() => setShow(!show)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-x"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1={18} y1={6} x2={6} y2={18} />
                  <line x1={6} y1={6} x2={18} y2={18} />
                </svg>
              </div>
            </div>
            <ul className="f-m-m">
              <MenuItem href="/" selected>
                Home
              </MenuItem>
              <MenuItem href="/now">Ongoing Events</MenuItem>
              <MenuItem href="/past">Past Events</MenuItem>
              <MenuItem href="/upcomings">Upcoming Events</MenuItem>
              <MenuItem href="/mypage">My Page</MenuItem>
              <LoginButton />
            </ul>
          </div>
          <div className="w-full">
            <div className="border-t border-gray-300">
              <div className="w-full flex items-center justify-between px-6 py-3">
                KOR USA IND AUS
              </div>
            </div>
            <div className="border-t border-gray-300">
              <div className="w-full flex items-center justify-between px-6 py-3">
                KST {time}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
