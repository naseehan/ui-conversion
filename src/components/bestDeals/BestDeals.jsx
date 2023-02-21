import React from 'react'
import { FlashCard } from './FlashCard'

export const BestDeals = ({productItems}) => {
  return (
    <>
        <section className='flash background'>
            <div className="container">
                <div className="heading f_flex">
                    <h1>Best Deals</h1>
                </div>
                <FlashCard productItems={productItems}/>
            </div>
        </section>
    </>
  )
}
