import React, { useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { convertTime, offset } from '@/utils/parseTime';
import { useRecoilState } from 'recoil';
import { timezoneState } from '@/recoil/atoms/timezone';

const TimezoneBox = () => {
  const [timezone, setTimezone] = useRecoilState(timezoneState);
  
  return (
    <div className="relative">
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button className="flex items-center justify-end w-full bg-gray h-14 p-5 rounded-lg text-white">
              Time Zone Setting
            </Menu.Button>
            <Transition
              show={open}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Menu.Items
                static
                className="absolute bottom-0 w-full divide-white divide-y"
              >
                {Object.entries(offset).map(([_timezone, _offset]) => (
                  <Menu.Item key={_timezone}>
                    <div
                      onClick={() => {
                        setTimezone(_timezone);
                      }}
                      className="flex justify-between bg-gray text-white w-full py-4 pl-4 pr-9 first:rounded-t-xl last:rounded-b-xl"
                    >
                      <span
                        className={`${timezone === _timezone && 'text-pink'}`}
                      >
                        {_timezone}
                      </span>
                      <span>{convertTime(new Date(), _timezone)}</span>
                    </div>
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
};

export default TimezoneBox;
