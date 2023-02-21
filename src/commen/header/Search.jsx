import React from 'react'
import logo from '../assets/images/logo.svg'
import { Link } from 'react-router-dom'


function Search() {

window.addEventListener("scroll", function(){
    const search = document.querySelector(".search")
    if (search !== null) {
    search.classList.toggle("active", window.scrollY > 100)
    }
})

  return (
    <>
    <section className='search'>
        <div className="container c_flex">
            <div className="logo width">
            <img src={logo} alt="" />
            </div>

            <div className="categories d_flex">
            <h5>
                classifieds
                <i class="fa fa-chevron-down"></i>
            </h5>

            </div>
            {/* search */}
            <div className="search-box f_flex">
          
                <input type="text" placeholder='Search here...'/>
                <i className="fa fa-search"></i>
                
            </div>

            <div className="icon f_flex width">
                <i className="fa fa-user icon-circle"></i>
                <div className="cart">
                    <Link to="/cart">
                        <i className="fa fa-shopping-bag icon-circle"></i>
                        <span>0</span>

                    </Link>
                </div>
            </div>
            <div className="classifi">
            <button type="button" class="btn btn-info classifi-button">classifieds</button>
            </div>
        </div>
    </section>
    </>
  )
}

export default Search