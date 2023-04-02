import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const Dasborad = () => {
  const marksArray = [
    { id: 1, name: "Alice", phy: 90, chem: 85, math: 95 },
    { id: 2, name: "Bob", phy: 80, chem: 75, math: 90 },
    { id: 3, name: "Charlie", phy: 70, chem: 90, math: 85 },
    { id: 4, name: "David", phy: 60, chem: 80, math: 80 },
    { id: 5, name: "Emily", phy: 95, chem: 95, math: 90 },
    { id: 6, name: "Frank", phy: 85, chem: 70, math: 75 },
    { id: 7, name: "Grace", phy: 80, chem: 90, math: 85 },
    { id: 8, name: "Harry", phy: 75, chem: 80, math: 90 },
    { id: 9, name: "Isabel", phy: 90, chem: 85, math: 75 },
    { id: 10, name: "Jack", phy: 85, chem: 90, math: 80 },
    { id: 11, name: "Kate", phy: 80, chem: 70, math: 85 },
    { id: 12, name: "Luke", phy: 75, chem: 85, math: 90 },
  ];
  return (
    <div className=''>
      <AreaChart
       width={600}
       height={400} 
       data={marksArray}
       margin={{
         top: 10,
         right: 30,
         left: 0,
         bottom: 0,
       }}>

  <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="phy" stroke="#8884d8" fill="#8884d8" /> 
       </AreaChart>
    </div>
  );
};

export default Dasborad;