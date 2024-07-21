import React from 'react'
import "./Navbar.css"
import Logo from "../../assets/logo.png"
import search from "../../assets/search_icon.svg" 
import Bell from "../../assets/bell_icon.svg"
import profile from "../../assets/profile_img.png"
import caret from "../../assets/caret_icon.svg"


const Navbar = () => {
  return (
    <div className='navbar'>
    <div className="navbar-left">
    <img src={Logo} alt="" />
    <ul>
      <li>Home</li>
      <li>TV Shows</li>
      <li>Movies</li>
      <li>New & Popular</li>
      <li>MyList</li>
      <li>Browse By Langauges</li>
    </ul>
    </div>
    <div className="navbar-right">
    <img src={search} alt="" className='icons' />
    <p>Chilren</p>
    <img src={Bell} alt="" className='icons' />
    <div className='navbar-profile'>
    <img src={profile} alt="" className='profile'/>
    <img src={caret} alt="" />
    <div className='dropdown'>
    <p>Sign out of Netflix</p>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Navbar