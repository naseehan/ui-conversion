import React from 'react'
import Products from './Products'
function ClassifiedProducts({classifiedItems}) {
  return (
    <>
    <Products classifiedItems={classifiedItems}/>
    </>
  )
}

export default ClassifiedProducts