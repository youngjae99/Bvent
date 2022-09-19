import UserAPI from '@/api/user';
import { userState } from '@/recoil/atoms/user';
import { Menu, Transition } from '@headlessui/react';
import React, { ChangeEvent, ReactNode, useRef } from 'react';
import { useRecoilState } from 'recoil';

interface PrimaryProps {
  children: ReactNode;
}

interface ImageProps {
  src?: string;
  editMode?: boolean;
}

interface InfoProps {
  children: ReactNode;
}

const Primary = ({ children }: PrimaryProps) => {
  return <div className="flex gap-x-10.5px">{children}</div>;
};

const Image = ({
  src = '/icons/default-profile-icon.svg',
  editMode,
}: ImageProps) => {
  const [userInfoState, setUserInfoState] = useRecoilState(userState);
  const ref = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const image =
    src === '/icons/default-profile-icon.svg'
      ? '/icons/default-profile-icon.svg'
      : `${src}&random=${Math.floor(Math.random() * 1000)}`;

  return (
    <div className="relative">
      <img className="rounded-full" src={image} width={52} height={52} />
      {editMode && (
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
                  className="absolute bottom-22 left-8 w-52 divide-black divide-y"
                >
                  <Menu.Item>
                    <div
                      onClick={async () => {
                        if (ref.current) {
                          ref.current.click();
                        }
                      }}
                      className="cursor-pointer flex justify-between bg-darkgray text-white w-full py-4 px-3 first:rounded-t-xl last:rounded-b-xl hover:text-pink"
                    >
                      Add Profile Photo
                    </div>
                  </Menu.Item>
                  <Menu.Item>
                    <div
                      onClick={async () => {
                        try {
                          await UserAPI.updateProfilePic({});
                          const userInfo = await UserAPI.getMyInfo();
                          setUserInfoState({
                            ...userInfo,
                            isSignIn: true,
                          });
                        } catch (error) {
                          console.error(error);
                        }
                      }}
                      className="cursor-pointer flex justify-between bg-darkgray text-white w-full py-4 px-3 pr-9 first:rounded-t-xl last:rounded-b-xl hover:text-pink"
                    >
                      Delete Profile Photo
                    </div>
                  </Menu.Item>
                  <input
                    hidden
                    type="file"
                    accept=".png,.jpg,.jpeg,.webp,.svg"
                    ref={ref}
                    onChange={async (e: ChangeEvent<HTMLInputElement>) => {
                      try {
                        if (e.target?.files?.[0]) {
                          await UserAPI.updateProfilePic({
                            file: e.target.files[0],
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
                        e.target.value = '';
                      }
                    }}
                  />
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      )}
    </div>
  );
};

const Info = ({ children }: InfoProps) => {
  return <div className="flex flex-col gap-px justify-center">{children}</div>;
};

Primary.Info = Info;
Primary.Image = Image;

export default Primary;
