import React from 'react';
import {  Tabs } from 'antd';
import  { useState } from 'react';


const HomeMenu = () => {
    const [tabPosition, setTabPosition] = useState('left');
 
  return (
    <>
      
      <Tabs
        tabPosition={tabPosition}
        items={new Array(5).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: <img className='rounded-full w-14 h-14' src='https://2.bp.blogspot.com/-I9Op5Q13w6Q/XFRpf1ge9nI/AAAAAAAABuw/j5IsTHRZw2cW2_iKG2-XFWKWwpZBMQcuQCLcBGAs/s1600/IMG_1831%2BKopie.jpg'/>,
            key: id,
            children: `Content of Tab ${id}`,
          };
        })}
      />
    </>
  )
}

export default HomeMenu