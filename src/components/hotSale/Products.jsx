import React from 'react'

function Products({hotProducts}) {
  return (
    <>
        <div className="recommend">
        <div className="left-arrow">
    <i className="fa-solid fa-2x fa-circle-arrow-left"></i>
    </div>
{hotProducts.map((product) => (


                <div className="carousel1 hot-box" key={product.id}>
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
                        <p>{product.ogPrice}</p>
                    </div>
                    <div className="rating1">
                        <p>{product.rating}</p>
                    </div>
                    <div className="cart-button">
                        <button>Add to cart</button>
                    </div>
                </div>
                ))}


        <div className="right-arrow">
            <i className="fa-solid fa-2x fa-circle-arrow-right"></i>
        </div>

            </div>
    </>
  )
}

export default Products