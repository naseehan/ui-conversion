import React from 'react'

function Head() {
  return (
    <>
    <section className='head'>
        <div className="container d_flex">
            <div className="left row">
        <i class="fa fa-phone"></i>  
        <label> +331 666 22 33</label>
        <i class="fa-regular fa-envelope"></i>   
        <label>support@elextra.io</label>
            </div>  

{/* right row text */}
<div className="left row Rtext">
<i class="fa-solid fa-location-dot"></i>
<label >Locations</label>
<label >$ Dollar (US)</label>
<i class="fa-solid fa-caret-down"></i>

<label>EN</label>
<i class="fa-solid fa-caret-down"></i>
</div>

        </div>
    </section>
    </>
  )
}

export default Head