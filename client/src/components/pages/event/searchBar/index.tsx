import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

type Props = any;

const SearchBar = (props: Props) => {
  return (
    <div className='w-full relative'>
      <input
        className="w-full px-4 py-3 bg-glass1 rounded-lg box-border border border-gray-500 outline-none text-white"
        placeholder="Search"
      ></input>
      <MagnifyingGlassIcon className='h-full text-gray w-5 absolute top-0 right-0 mr-4'/>
    </div>
  );
};

export default SearchBar;
