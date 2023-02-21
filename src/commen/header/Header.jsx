import React from 'react'
import Head from './Head'
import Navbar from './Navbar'
import Search from './Search'
import './Header.css'


function Header() {
  return (
    <>
        <Head />
        <Search />
        <Navbar />
    </>
  )
}

export default Header