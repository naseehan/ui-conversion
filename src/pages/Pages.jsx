import React from 'react'
import { BestDeals } from '../components/bestDeals/BestDeals'
import ClassifiedProducts from '../components/classified/ClassifiedProducts'
import Flash from '../components/flashSale/Flash'
import HotSale from '../components/hotSale/HotSale'
import Home from '../components/mainpage/Home'
import Recommended from '../components/recommended/Recommended'

function Pages({productItems, classifiedItems, recommendedProducts, hotProducts}) {
  return (
    <>
    <Home />
    <BestDeals productItems={productItems}/>
    <ClassifiedProducts classifiedItems={classifiedItems}/>
    <Recommended recommendedProducts={recommendedProducts}/>
    {/* <Flash /> */}
    <HotSale hotProducts={hotProducts}/>
    </>
  )
}

export default Pages