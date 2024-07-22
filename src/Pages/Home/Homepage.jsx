import React from 'react'
import "./Homepage.css"
import Navbar from "../../Components/Navbar/Navbar"
import Banner from "../../assets/hero_banner.jpg"
import HeroTittle from "../../assets/hero_title.png";
import play from "../../assets/play_icon.png"
import Info from "../../assets/info_icon.png"


const Homepage = () => {
  return (
    <div className='Homepage'>
    <Navbar/>
    <div className="hero">
    <img src={Banner} alt="" className='banner-img' />
    <div className="hero-caption">
    <img src={HeroTittle} alt="" className='caption-img' />
    <p>Discovering his ties to Secret ancient order, a young man livinng in Istanbul emabarks on quest to save the city from imoortal enemy</p>
    <div className="hero-btns">
    <button className='btn'><img src={play} alt="" /> Play</button>
    <button className='btn dark-btn'><img src={Info} alt="" /> More-Info</button>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Homepage