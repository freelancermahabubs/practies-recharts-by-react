import React from 'react';
import {CheckCircleIcon} from '@heroicons/react/24/solid';

const Feature = ({feature}) => {
  return (
    <div className='flex gap-1 items-center pl-4'>
     <CheckCircleIcon className="h-6 w-6 text-white" />
     <span>{feature}</span>
      
    </div>
  );
};

export default Feature;