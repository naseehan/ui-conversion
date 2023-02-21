import React from 'react'
import Slider from "react-slick";

function Products({recommendedProducts}) {
  return (
    <>
    <div className='recommend'>
    <div className="left-arrow">
    <i className="fa-solid fa-2x fa-circle-arrow-left"></i>
    </div>
        

            {recommendedProducts.map((product) => (

           


                <div className="carousel1" key={product.id}>

                        <div className="img-carousel">
                            <img src={product.img} alt="" />
                        </div>
                        <div className="porduct-name">
                            <p>{product.text}</p>
                        </div>
                        <div className="price">
                            <p>{product.price}</p>
                        </div>
                        <div className="og-price">
                            <p>{product.ogRate}</p>
                        </div>
                        <div className="rating">
                            <p>{product.rating}</p>
                            
                        </div>
                        <i className="fa-solid fa-star fa-2xs"></i>
                </div>
                 ))}
        
        <div className="right-arrow">
            <a>View all</a>
            <i className="fa-solid fa-2x fa-circle-arrow-right"></i>
        </div>
        </div>
    </>
  )
}

export default Products