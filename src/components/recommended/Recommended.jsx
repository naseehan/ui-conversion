import React from 'react'
import Products from './Products'

function Recommended({recommendedProducts}) {
  return (
    <>
    <section className=''>
            <div className="container">
                <div className="heading3">
                    <h1>Recommended</h1>
                </div>
                <Products recommendedProducts={recommendedProducts}/>
            </div>
        </section>
    </>
  )
}

export default Recommended