import React, { Component } from "react";
import Slider from "react-slick";
import styleSlick from './css/MultipleRowSlick.module.css'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={`${className} ${styleSlick['slick-next']}`} style={{ ...style, display: 'block' }} onClick={onClick}>

    </div>
  )
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={`${className} ${styleSlick['slick-prev']}`} style={{ ...style, display: 'block', left: '-35px' }} onClick={onClick}>

    </div>
  )
}



export default class MultipleRowSlick extends Component {

  renderFilm = () => {
    return this.props.movieList.filter(item => item.sapChieu.toString() === this.props.query).map((item) => {
      return <div className="p-3 " key={item.maPhim} >
        <div className=" bg-gray-200 bg-opacity-90 px-6 pt-6 pb-14 rounded-lg overflow-hidden text-center relative" style={{height:'500px'}}>
         <div style={{background:`url(${item.hinhAnh})`, backgroundPosition:'center', backgroundSize:'100%,100%'}}>
         <img src={item.hinhAnh} alt={item.tenPhim} style={{ height: '300px' }} className="rounded mb-1 opacity-0 w-full" />
         </div>
      
            <h1 className="title-font sm:text-1xl text-xl font-medium text-gray-900 h-16 pt-2 ">{item.tenPhim}</h1>
            <p className="leading-relaxed ">{item.moTa.length >50? item.moTa.substr(0,50)+'...' : item.moTa}</p>
        
          <a className="text-pink-500 inline-flex items-center pt-2 hover:text-violet-500">Book Ticket
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </a>
          
        </div>
      </div>
    })
  }
  render() {
    const settings = {
      className: "center ",
      centerMode: true,
      infinite: true,
      centerPadding: "10px",
      slidesToShow: 2,
      speed: 500,
      rows: 2,
      slidesPerRow: 2,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />

    };
    return (
      <div className="container ">

        <Slider {...settings}>
          {this.renderFilm()}
          {this.renderFilm()}
          {this.renderFilm()}
          {this.renderFilm()}
        </Slider>
      </div>
    );
  }
}