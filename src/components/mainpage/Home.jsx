import React from 'react'
import SlideCard from './SlideCard'
import Slider from './Slider'
// import Categories from './Categories'

import "./Home.css"
function Home() {
  return (
    <>
    <section className="home">
        <div className="container d_flex">
            {/* <Categories /> */}
            <Slider />
        </div>
    </section>
    </>
  )
}

export default Home