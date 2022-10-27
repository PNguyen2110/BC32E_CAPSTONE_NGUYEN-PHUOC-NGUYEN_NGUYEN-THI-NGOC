import React, { Component } from "react";
import Slider from "react-slick";

// function SampleNextArrow(props){
//     const {className,style,onClick}=props;
//     return(
//         <div className={`${className} ${styleSlick['slick-prev']}`} style={{...style,display:'block'}} onClick={onClick}>

//         </div>
//     )
// }
// function SamplePrevArrow(props){
//     const {className,style,onClick}=props;
//     return(
//         <div className={`${className} ${styleSlick['slick-prev']}`} style={{...style,display:'block',left:'50px'}} onClick={onClick}>

//         </div>
//     )
// }

export default class MultipleRowSlick extends Component {
  render() {
    const settings = {
      className: "center variable-width",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 2,
      speed: 500,
      rows: 2,
      slidesPerRow: 2,
      variableWidth:true,
    //  nextArrow: <SampleNextArrow/>,
    //  prevArrow: <SamplePrevArrow/>

    };
    return (
      <div className="container">
        
        <Slider {...settings}>
          {this.props.movieList.map((item)=>{
            return <div className="p-4 lg:w-1/3" key={item.maPhim}>
            <div className="h-full bg-gray-200 bg-opacity-90 px-6 pt-8 pb-20 rounded-lg overflow-hidden text-center relative">
              <img src={item.hinhAnh} alt="" style={{width:'100%',height:'350px'}} className="rounded"/>
              <h1>hhhhhhhhh</h1>
              <a className="text-pink-500 inline-flex items-center pt-2 hover:text-violet-500">For Detail
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
              <div className="text-center  leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3  border-r-2 border-gray-200">
                  <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx={12} cy={12} r={3} />
                  </svg>1.2K
                </span>
                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                  <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                  </svg>6
                </span>
              </div>
            </div>
          </div>
          })}
        </Slider>
      </div>
    );
  }
}