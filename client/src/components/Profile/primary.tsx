import { Menu, Transition } from '@headlessui/react';
import React, { ReactNode } from 'react';

interface PrimaryProps {
  children: ReactNode;
}

interface ImageProps {
  src?: string;
}

interface InfoProps {
  children: ReactNode;
}

const Primary = ({ children }: PrimaryProps) => {
  return <div className="flex gap-x-10.5px">{children}</div>;
};

const Image = ({ src = '/icons/default-profile-icon.svg' }: ImageProps) => {
  return (
    <div className="relative">
      <img className="rounded-full" src={src} width={52} height={52} />
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button className="absolute bottom-0.5 right-0.5 cursor-pointer">
              <img src="/icons/plus-icon.svg" />
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
                className="absolute bottom-22 left-8 w-52 divide-white divide-y"
              >
                <Menu.Item>
                  <div
                    // onClick={() => {}}
                    className="flex justify-between bg-gray text-white w-full py-4 px-3 first:rounded-t-xl last:rounded-b-xl"
                  >
                    Add Profile Photo
                  </div>
                </Menu.Item>
                <Menu.Item>
                  <div
                    // onClick={() => {}}
                    className="flex justify-between bg-gray text-white w-full py-4 px-3 pr-9 first:rounded-t-xl last:rounded-b-xl"
                  >
                    Delete Profile Photo
                  </div>
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
};

const Info = ({ children }: InfoProps) => {
  return <div className="flex flex-col gap-px justify-center">{children}</div>;
};

Primary.Info = Info;
Primary.Image = Image;

export default Primary;
