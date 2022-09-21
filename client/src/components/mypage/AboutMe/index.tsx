import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import styled from 'styled-components';

import Profile from '@/components/Profile';
import { formatAccount } from '@/utils/wallet';
import { Disclosure } from '@headlessui/react';
import {
  ChevronDownIcon,
  CircleStackIcon,
  WalletIcon,
} from '@heroicons/react/24/outline';
import Button from '@/components/Button';
import UserAPI from '@/api/user';
import { useRouter } from 'next/router';
import { userState } from '@/recoil/atoms/user';
import { useRecoilState } from 'recoil';

const StyledWrapper = styled.div`
  color: white;
  background-color: var(--colors-background);
  display: grid;
  gap: 20px;
`;

const StyledInfoWrapper = ({ children }: any) => {
  return (
    <div
      className="py-5 pl-4 pr-5 rounded-2xl flex justify-between body items-center"
      style={{ border: '1px solid rgba(84, 84, 88, 0.65)' }}
    >
      {children}
    </div>
  );
};

const RequiredBox = styled.div`
  width: fit-content;
  height: 25px;
  box-sizing: border-box;
  margin: 0;
  padding: 0 10px;
  border-style: solid;
  border-width: 0;
  border-radius: 99px;
  background-color: ${(props: { required: boolean }) =>
    props.required ? 'hsla(0,0%,100%,.1)' : 'hsla(0,0%,100%,.1)'};
  color: ${(props: { required: boolean }) =>
    props.required ? '#64d2ff' : 'white'};
  align-items: center;
  vertical-align: baseline;
`;

type FieldSetProps = {
  title: string;
  required?: boolean;
  description: string;
};

const Input = ({ placeholder, limit, initial }: any, ref) => {
  const [value, setValue] = useState(initial);

  return (
    <div
      className={`${
        value ? 'border-none' : 'border-primary'
      } pt-8 pb-4 px-4 h-18 border rounded-2xl transition-border relative bg-darkgray`}
      onClick={() => {
        ref.current.focus();
      }}
    >
      <div
        className={`border-pink absolute top-8 left-4 origin-top-left transform transition-all ${
          value && 'scale-75 -translate-y-6 text-xl text-primary peer-focus:text-pink'
        }`}
      >
        {placeholder}
      </div>
      {limit && value && (
        <div className="border-gray absolute top-4 right-4 transform scale-75 -translate-y-2 text-gray">
          {value.length}/{limit}
        </div>
      )}
      <input
        className="peer w-full text-xl"
        ref={ref}
        onChange={(e) => {
          if (e.target.value.length <= 50) {
            setValue(e.target.value);
          }
        }}
        value={value}
      />
    </div>
  );
};

const ForwardRefInput = forwardRef(Input);

export const AboutMe = () => {
  const [userInfoState, setUserInfoState] = useRecoilState(userState);
  const {
    bio = 'Bventer',
    username,
    total_coin = 0,
    profile_pic,
    isSignIn,
  } = userInfoState;

  const { active, account, connector, chainId } = useWeb3React();
  const router = useRouter();
  const [editMode, setEditMode] = useState<boolean>(!!router.query.edit);
  const usernameRef = useRef<HTMLInputElement>(null);
  const bioRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setEditMode(!!router.query.edit);
  }, [router.query]);

  return (
    <StyledWrapper className="divide-gray divide-y">
      <div className="flex justify-between pl-3 items-end max-w-full">
        <Profile.Primary>
          <Profile.Primary.Image editMode src={profile_pic} />
          <Profile.Primary.Info>
            <div className="title2 text-white">
              {isSignIn ? `${username?.slice(0, 10)}` : 'Sign In'}
            </div>
            <div className="caption text-gray">
              {isSignIn ? bio : 'Sign in with your wallet'}
            </div>
          </Profile.Primary.Info>
        </Profile.Primary>
        <Button
          // className="h-11"
          bgColor={editMode ? 'primary' : 'darkgray'}
          onClick={async () => {
            try {
              if (editMode && bioRef.current) {
                const _username = (usernameRef?.current || {}).value || '';
                const _bio = bioRef.current.value || '';

                await UserAPI.updateMyInfo({
                  username: _username,
                  bio: _bio,
                });
                const userInfo = await UserAPI.getMyInfo();
                setUserInfoState({
                  ...userInfo,
                  isSignIn: true,
                });
              }
            } catch (error) {
              console.error(error);
            } finally {
              setEditMode((prev) => !prev);
            }
          }}
        >
          {editMode ? 'Save' : 'Edit Profile'}
        </Button>
      </div>
      <div className="w-full grid gap-5 pt-5">
        {editMode ? (
          <>
            <ForwardRefInput
              ref={usernameRef}
              placeholder="Username"
              limit={50}
              initial={username}
            />
            <ForwardRefInput ref={bioRef} placeholder="Bio" initial={bio} />
          </>
        ) : (
          <>
            <StyledInfoWrapper>
              <span className="flex gap-3 items-center">
                <CircleStackIcon className="w-5 h-5" />
                <span>Total Rewards</span>
              </span>
              <span className="text-pink headline">{total_coin}</span>
            </StyledInfoWrapper>
            <StyledInfoWrapper>
              <Disclosure>
                {({ open }) => (
                  <div className="grid gap-5 w-full">
                    <Disclosure.Button className="w-full flex justify-between items-center">
                      <span className="flex gap-3 items-center">
                        <WalletIcon className="w-5 h-5" />
                        <span>My wallet</span>
                      </span>
                      <ChevronDownIcon
                        className={`${open ? 'rotate-180 transform' : ''} h-4 transition-all`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="w-full grid gap-1">
                      <span className="text-pink body">Metamask</span>
                      <span className="text-gray caption">{account}</span>
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            </StyledInfoWrapper>
            <StyledInfoWrapper className="py-5 pl-4 pr-5 border border-gray rounded-2xl flex justify-between body items-center">
              <span>Review History</span>
              <img
                className="cursor-pointer"
                onClick={() => {
                  window.open(`https://evm.evmos.dev/address/${account}`);
                }}
                src="/icons/link.svg"
                width={12}
                height={12}
              />
            </StyledInfoWrapper>
          </>
        )}
      </div>
    </StyledWrapper>
  );
};

export default AboutMe;
