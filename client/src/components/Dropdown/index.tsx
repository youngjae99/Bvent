import React, { useState } from 'react';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

type Props = {
  options: boolean;
};

const Selector = (props: Props) => {
  const [opened, setOpened] = useState(false);
  const { options } = props;

  return (
    <div
      aria-haspopup="true"
      className="cursor-pointer w-full flex items-center justify-end relative"
      onClick={() => setOpened(!opened)}
    >
      {opened ? (
        <ul
          className="p-2 w-48 border-r absolute rounded z-40 right-0 shadow mt-40"
          style={{
            background: 'rgba(0, 0, 0, 0.1)',
            borderRadius: '16px',
            // boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(15px)',
            border: 0,
            // border: '1px solid rgba(255, 255, 255, 0.3)',
            // filter: 'drop-shadow(0px 8px 64px rgba(0, 0, 0, 0.1))',
            // backdropFilter: 'blur(80px)',
            // borderRadius: '12px',
          }}
        >
          <li className="cursor-pointer text-white text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
            All
          </li>
          <li className="cursor-pointer text-white text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
            2022
          </li>
          <li className="cursor-pointer text-white text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
            2022
          </li>
        </ul>
      ) : (
        ''
      )}
      <div className="flex flex-row gap-1 leading-none">
        {!opened ? <FiChevronDown /> : <FiChevronUp />}
        Sort By Date
      </div>
    </div>
  );
};

export default Selector;
