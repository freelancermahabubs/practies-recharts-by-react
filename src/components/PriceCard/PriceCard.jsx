import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({price}) => {
  return (
     <div className='bg-sky-700 rounded-lg'>
     <h2 className='text-center pt-3'>
      <span className='text-5xl font-extrabold text-orange-400'>{price.price}</span>
      <span className='text-2xl font-bold text-white'>/mon</span>
     </h2>
     <p className='text-3xl text-center font-semibold text-white'>{price.name}</p>
     <p className='text-2xl font-semibold text-orange-400 pl-4 underline pb-2'>Features</p>
  <div className='pb-4 text-xl font-semibold text-white'>
  {
      price.features.map((feature, idx) => <Feature key={idx} feature ={feature}/>)
     }
  </div>
  <button className='w-full hover:bg-green-700 bg-green-500 mt-auto py-2 round-md text-white font-bold'>Buy Now</button>
     </div>

  );
};

export default PriceCard;