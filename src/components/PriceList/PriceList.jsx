import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
  const[prices, setPrices] = useState([]);
 useEffect(()=>{
  fetch('price.json')
  .then(res => res.json())
  .then(data => setPrices(data))
 },[])
  return (
    <>
     
      <h1 className='md:text-5xl text-2xl text-center w-[94%] mx-auto my-3 rounded text-white bg-purple-500 font-bold p-4'>Awesome <span className='text-orange-400'>Affordable </span> Price</h1>
     
      <div className='grid md:grid-cols-3 gap-3 md:px-11 px-3 my-5'>
      {
        prices.map(price => <PriceCard key={price.id} price={price}/>)
      }
      </div>
      
    </>
  );
};

export default PriceList;