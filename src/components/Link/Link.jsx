import React from 'react';
const Link = ({route}) => {
  return (
    <>
      <li className='text-white mr-12 hover:bg-red-400 p-2 rounded text-2xl'>
        <a href={route.path}>{route.name}</a>
      </li>
    </>
  );
};

export default Link;