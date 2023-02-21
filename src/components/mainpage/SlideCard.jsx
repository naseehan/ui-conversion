import React from 'react'
import Rectangle from'./Rectangle 9.png' 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SlideCard() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:false
      };
    const data=[{
        title: "From students to senior citizens this web portal of",
        h:'"Products and Classifieds"',
        p:"provides it all",
        img: Rectangle
    },
{
    title: "From students to senior citizens this web portal of",
    h:'"Products and Classifieds"',
    p:"provides it all",
    img: Rectangle
}]
  return (
    <>
    <Slider {...settings}>
    {data.map((value, index) =>{
            return(
<>
    <div className="d_flex top box" key={index}>
        <div className="right" >
            <p>{value.title}</p>
            <h3>{value.h}</h3>
            <p>{value.p}</p>
        </div>
        
        <div className='left'>
        <img src={value.img} alt="" />
        </div>
    
   
    </div>
    </>
     )
    })}
    </Slider>
    </>
  )
}

export default SlideCard