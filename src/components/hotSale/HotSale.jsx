import React from 'react'
import Products from './Products'

function HotSale({hotProducts}) {
  return (
    <>
    <div className="container">
                <div className="heading3">
                    <h1>Hot Sale</h1>
                </div>
                <Products hotProducts={hotProducts}/>
    </div>
        
    </>
  )
}

export default HotSale