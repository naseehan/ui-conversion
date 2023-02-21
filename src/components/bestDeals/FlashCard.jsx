import React from 'react'
import Slider from "react-slick";

export const FlashCard = ({productItems}) => {
    return (
      <div className="box">
        {productItems.map((product) => (
          <div className="product mtop">
            <div className="img">
              <img src={product.cover} alt="" />
            </div>
            <div className="product-details">
              <p>{product.name}</p>
              <div className="rate">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <div className="price">
                <p>{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

