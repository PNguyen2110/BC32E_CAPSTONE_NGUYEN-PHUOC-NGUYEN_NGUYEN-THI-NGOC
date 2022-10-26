import React from 'react'
import { Carousel } from 'antd';

const contentStyle = {
    height: '400px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

const HomeCarousel = () => {
  return (
    <Carousel effect="fade">
    <div>
      <div style={contentStyle}>
        <img className='w-full' src="https://2.bp.blogspot.com/-I9Op5Q13w6Q/XFRpf1ge9nI/AAAAAAAABuw/j5IsTHRZw2cW2_iKG2-XFWKWwpZBMQcuQCLcBGAs/s1600/IMG_1831%2BKopie.jpg" alt="123" />
      </div>
    </div>
    <div>
      <div style={contentStyle}>
      <img className='w-full' src="https://2.bp.blogspot.com/-I9Op5Q13w6Q/XFRpf1ge9nI/AAAAAAAABuw/j5IsTHRZw2cW2_iKG2-XFWKWwpZBMQcuQCLcBGAs/s1600/IMG_1831%2BKopie.jpg" alt="123" />
      </div>
    </div>
    <div>
      <div style={contentStyle}>
      <img className='w-full' src="https://2.bp.blogspot.com/-I9Op5Q13w6Q/XFRpf1ge9nI/AAAAAAAABuw/j5IsTHRZw2cW2_iKG2-XFWKWwpZBMQcuQCLcBGAs/s1600/IMG_1831%2BKopie.jpg" alt="123" />
      </div>
    </div>
    <div>
      <div style={contentStyle}>
      <img className='w-full' src="https://2.bp.blogspot.com/-I9Op5Q13w6Q/XFRpf1ge9nI/AAAAAAAABuw/j5IsTHRZw2cW2_iKG2-XFWKWwpZBMQcuQCLcBGAs/s1600/IMG_1831%2BKopie.jpg" alt="123" />
      </div>
    </div>
  </Carousel>
  )
}

export default HomeCarousel