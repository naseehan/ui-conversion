import React from 'react'


function Boxes() {
  return (
    <>
        <div className="container">
            <div className="full-box">
                <div className="flash-sale">
                    <div className="flash-heading">
                        <h2>Flash Sale</h2>
                    </div>
                    <div className="flash-text">
                        <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut
                            labore</p>
                    </div>
                    <div className="flash-timer">
                        <p>05  :  42  :  19  :  54</p>
                    </div>
                </div>
                <div className="flash-products" style={{ display: 'flex' }}>
                    <div className="col-md-6">
                        <div className="flash-img">
                            <img src="./flash-images/placeholder (14).png" alt="" />
                        </div>
                        <div className="img-text">
                            <p>Casio G-Shock Ana-Digi Quartz World Time 200m Black</p>
                        </div>
                        <div className="product-rate">
                            <p>$33.3</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="flash-img">
                            <img src="./flash-images/placeholder (15).png" alt="" />
                        </div>
                        <div className="img-text">
                            <p>Casio G-Shock Ana-Digi Quartz World Time 200m Black</p>
                        </div>
                        <div className="product-rate">
                            <p>$33.3</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </>
  )
}

export default Boxes