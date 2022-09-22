import React from 'react';
import { Menu, Transition } from '@headlessui/react';
import { getTimezoneTime, IANAZone } from '@/utils/parseTime';
import { useRecoilState } from 'recoil';
import { timezoneState } from '@/recoil/atoms/timezone';
import { Cog6ToothIcon } from '@heroicons/react/24/outline';

const TimezoneBox = () => {
  const [timezone, setTimezone] = useRecoilState(timezoneState);
  
  return (
    <div className="relative">
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button className="flex items-center justify-end w-full bg-white bg-opacity-10 hover:bg-opacity-20 h-14 p-5 rounded-xl text-white cursor-pointer">
              Time Zone Setting <Cog6ToothIcon className="w-5 ml-2" />
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
                className="absolute bottom-0 mb-16 w-full divide-black divide-y"
              >
                {Object.entries(IANAZone).map(([_timezone, iana]) => (
                  <Menu.Item key={_timezone}>
                    <div
                      onClick={() => {
                        setTimezone(_timezone);
                      }}
                      className="flex justify-between bg-white bg-opacity-10 hover:bg-opacity-20 text-white w-full py-4 pl-4 pr-9 first:rounded-t-xl last:rounded-b-xl cursor-pointer"
                    >
                      <span
                        className={`${timezone === _timezone && 'text-pink'}`}
                      >
                        {iana}
                      </span>
                      <span>{getTimezoneTime(iana)}</span>
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
