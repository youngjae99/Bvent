import React, { useState, useEffect } from 'react';
// import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
// import { CherveonDown, CherveonUp } from '@heroicons/react/outline';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

type SelectorProps = {
  label: string;
  options: string[];
  handler?: any;
};

const Selector = (props: SelectorProps) => {
  const [opened, setOpened] = useState(false);
  const { label, options, handler } = props;
  const [selected, setSelected] = useState(0);

  const changeSelected = (index: number) => {
    setSelected(index);
    handler(index);
  };

  return (
    <div
      aria-haspopup="true"
      className="cursor-pointer flex items-center justify-end relative mx-2"
      onClick={() => setOpened(!opened)}
    >
      {opened ? (
        <ul
          className="p-2 w-20 border-r absolute rounded z-40 right-0 shadow mt-40"
          style={{
            background: 'rgba(0, 0, 0, 0.5)',
            borderRadius: '16px',
            backdropFilter: 'blur(15px)',
            border: 0,
          }}
        >
          {options &&
            options.map((option, i) => (
              <li
                key={i}
                className="cursor-pointer text-white text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none"
                onClick={() => changeSelected(i)}
              >
                {option}
              </li>
            ))}
        </ul>
      ) : (
        ''
      )}
      <div className="flex flex-row gap-1 leading-none">
        {label}
        {!opened ? <ChevronDownIcon /> : <ChevronUpIcon />}
      </div>
    </div>
  );
};

export default Selector;
