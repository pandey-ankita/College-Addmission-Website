import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import n1 from "../../assets/logo1.jpg"
import menu from "../../assets/menu.png"
import { Link } from 'react-scroll'

const Navbar = () => {

const [sticky, setSticky] = useState(false)

useEffect(()=>{
    window.addEventListener('scroll',()=>{
        window.scrollY > 50 ? setSticky(true):setSticky(false)
    })
},[])

const [mobileMenu, setMobileMenu] = useState(false)
const toggleMenu =()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
}

  return (
    <>
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
        <img src={n1} alt="" className='logo' />
        <ul className={mobileMenu?'':'hide-moblie-menu'}>
            <li><Link to='Part1' smooth={true} offset={0} duration={500}>home</Link></li>
            <li><Link to='Pc' smooth={true} offset={-260} duration={500}>Program</Link></li>
            <li><Link to='About' smooth={true} offset={-150} duration={500}>About</Link></li>
            <li><Link to='Campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
            <li><Link to='Testimonial' smooth={true} offset={-260} duration={500}>Testimonial</Link></li>
            <li> <Link to='Help' smooth={true} offset={-260} duration={500} className='btn'>contact</Link></li>
        </ul>
        <img src={menu} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
</> )
}

export default Navbar