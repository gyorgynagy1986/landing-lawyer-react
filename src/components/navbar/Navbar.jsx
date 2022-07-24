import React, { useState } from 'react';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';
import './navbar.css';


const Menu = () => (
    <>  
    <li><a href="#home">Home</a></li> 
    <li><a href="#intro">Rólam</a></li> 
    <li><a href="#services">Szolgáltatások</a></li> 
    <li><a href="#prices">Árak</a></li> 
    <li><a href="#contact">Elérhetőség</a></li> 
    </>
)

const Navbar = () => {
    const [toggleMenu, SetToggalMenu] = useState(false);


    return (
        <div className='navigation'>    
            <div className='navigation-container'>
                <ul className='listItems'>
                    <Menu />
                </ul> 
            </div>
                <div className='navigatio-bar-menu'>
                            {toggleMenu

                                ? <RiCloseLine  color="#8C7156" size = {35} onClick={() => SetToggalMenu(false)}  />
                                : <RiMenu3Line  color="#8C7156" size = {35} onClick={() => SetToggalMenu(true)}  />    
                        }

                        {toggleMenu && (
                            <div className='navigation-bar-menu-container scale-up-center'>
                                <div className='navigation-bar-menu-container-links'>
                                    <Menu />
                                </div>
                            </div>

                        )}
                </div>
        </div>
    )
}

export default Navbar