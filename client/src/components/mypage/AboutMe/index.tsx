import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import styled from 'styled-components';

import Profile from '@/components/Profile';
import { formatAccount } from '@/utils/wallet';
import { Disclosure } from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import Button from '@/components/Button';
import UserAPI from '@/api/user';
import { useRouter } from 'next/router';
import { userState } from '@/recoil/atoms/user';
import { useRecoilState } from 'recoil';

// interface Props {
//     onPress: any;
//     src: any;
//     width: string;
//     height: string;
//   }

const StyledWrapper = styled.div`
  color: white;
  background-color: var(--colors-background);
  display: grid;
  gap: 20px;
`;

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
        value ? 'border-pink' : 'border-gray'
      } pt-5 pb-2 px-4 border rounded-2xl transition-border relative h-14`}
      onClick={() => {
        ref.current.focus();
      }}
    >
      <div
        className={`border-pink absolute top-4 left-4 origin-top-left transform transition-all ${
          value && 'scale-75 -translate-y-2 text-pink'
        }`}
      >
        {placeholder}
      </div>
      {limit && (
        <div className="border-gray absolute top-4 right-4 transform scale-75 -translate-y-2">
          {value.length}/{limit}
        </div>
      )}
      <input
        className="w-full"
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
    profilePic,
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
    <StyledWrapper className="divide-white divide-y">
      <div className="flex justify-between pl-3 items-end max-w-full">
        <Profile.Primary>
          <Profile.Primary.Image editMode />
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
          className="h-11"
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
            <div className="py-5 pl-4 pr-5 border border-gray rounded-2xl flex justify-between body">
              <span>Total Rewards</span>
              <span className="text-pink headline">{total_coin}</span>
            </div>
            <div className="py-5 px-4 border border-gray rounded-2xl">
              <Disclosure>
                {({ open }) => (
                  <div className="grid gap-5">
                    <Disclosure.Button className="w-full flex justify-between items-center">
                      <span>My wallet</span>
                      <ChevronRightIcon
                        className={`${open ? 'rotate-90 transform' : ''} h-4`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="w-full grid gap-1">
                      <span className="text-pink body">Metamask</span>
                      <span className="text-gray caption">{account}</span>
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            </div>
          </>
        )}
      </div>
    </StyledWrapper>
  );
};

export default AboutMe;
