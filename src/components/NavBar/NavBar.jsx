import React, { useState } from 'react';
import {Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Link from '../Link/Link';

const NavBar = () => {
  const [open, setOpen] = useState(false)
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Contact", path: "/contact" },
    { id: 4, name: "Products", path: "/products" },
    { id: 5, name: "Product Details", path: "/products/:productId" }
  ];
  return (
    <>
     <nav className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4'>
      <div onClick={()=> setOpen(!open)} className='md:hidden'>
        <span>
        {
          open === true ? <XMarkIcon className="h-6 w-6 cursor-pointer text-white" /> : <Bars3Icon className="h-6 w-6 cursor-pointer text-white" /> 
        }
      </span>
      </div>
     <ul className={`md:flex absolute md:sticky bg-gradient-to-r from-indigo-500 via-purple-500 text-xl duration-500 rounded  to-pink-500 font-semibold pl-4 pb-3 md:pt-4 ${open ? 'top-6' : '-top-96'}`}>
        {
          routes.map(route => <Link key={route.id} route ={route}/>)
        }
      </ul>
     </nav>
    </>
  );
};

export default NavBar;