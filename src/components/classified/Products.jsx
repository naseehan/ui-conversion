import React from 'react'
import Slider from "react-slick";

function Products({classifiedItems}) {
  return (
    <div className="box-carousel">
        <div className="header1">
              <p>Classified Products on the week</p>
              <i class="fa-solid fa-2x fa-circle-arrow-left"></i>
              <i class="fa-solid fa-2x fa-circle-arrow-right"></i>
              <button>Explore</button>
            </div>

            {/* the first condition product.sell checks if the product.
            sell variable exists and is not null or undefined.
             The second condition product.sell.length > 0 checks if there are elements in the product.
             sell array. If both conditions are true, the div with the urgent class and the p tag will be rendered.
              If either condition is false, the div will not be rendered. */}
      {classifiedItems && classifiedItems.length > 0 ? (
        classifiedItems.map((product) => (
          <div className="carousel" key={product.id}>



            {product.sell && product.sell.length > 0 &&
            <div className="urgent">
            <p>{product.sell}</p>
            </div>
}
            <div className="img-carousel">
              <img src={product.img} alt="" key={product.id}/>
            </div>
            <div className="product-name">
              <p>{product.text}</p>
            </div>
            <div className="price">
              <p>{product.price}</p>
            </div>
            <div className="location">
              <p>{product.location}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No products to display.</p>
      )}
    </div>
  )
}

export default Products;
