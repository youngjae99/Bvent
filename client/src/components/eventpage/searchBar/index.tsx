import React from 'react';

type Props = any;

const SearchBar = (props: Props) => {
  // return <img src="/images/search-bar.png" height="20px" />;
  return(
    <input className="w-full px-3 py-3 bg-glass1 rounded-lg border border-gray-500 outline-none text-gray-300"/>
  );
};

export default SearchBar;
