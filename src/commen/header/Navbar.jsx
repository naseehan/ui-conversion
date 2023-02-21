import React, {useState} from 'react'
import { Link } from 'react-router-dom' 
function Navbar() {

const [MobileMenu, setMobileMenu] = useState(false)

  return (
    <>
       <header className='header'>
        <div className="container d_flex">
            <div className='categories d_flex classifie'>
                {/* <span className='fa-solid fa-border-all'></span> */}
                <h5>All Categories
                <i className='fa fa-chevron-down'></i>
                </h5>
                </div>


                <div className='navlink'>
                    <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex  capitalize"} onClick={() => setMobileMenu(false)}>
                        <li>
                            <Link to="/"> Books </Link>
                        </li>
                        <li>
                            <Link to="/pages"> Electronics </Link>
                        </li>
                        <li>
                            <Link to="/user"> Real Estate </Link>
                        </li>
                        <li>
                            <Link to="/vendor"> Cars-Bikes </Link>
                        </li>
                        <li>
                            <Link to="/track"> Dorm-Furniture </Link>
                        </li>
                        <li>
                            <Link to="/contact"> Men </Link>
                        </li>
                    </ul>

<button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
    {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className="fa-solid fa-bars open"></i>

    }
</button>

                </div>
            
        </div>
       </header>
    </>
  )
}

export default Navbar