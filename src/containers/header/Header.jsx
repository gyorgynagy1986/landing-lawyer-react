import React from 'react'
import './header.css';
import iconBilding from'../../assets/icon-gold-building.png';
import iconLibra from'../../assets/icon-gold.png';

const Header = () => {
    return (
        <div id='home' className='section-header bimage'>
            
            <div className='container-header'>
                
                
                <div className='nameTitle'>
                    <p>Miklóssy &nbsp;Sándor</p>
                </div>

                <div className='texBox-container'>
                    <div className='textBox'>
                        <p className='textBox-title'>Sanyiszkópia</p>
                        <img className='textBox-bilding' src = {iconBilding} width={72} height={49} alt='goldicon' />
                        <div className='textBox-line'></div>
                        <p className='textBox-text'>
                            ‘<span className='textBox-text-span'>Lorem ipsum dolor </span> sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut 
                            labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                            laboris nisi ut aliquip ex ea commodo consequat. ‘
                        </p>
                        <img className='textBox-libra' src = {iconLibra} width={72} height={49} alt='goldicon' />
                        <div className='textBox-line'></div>
                    </div>
                
                </div>
                
             </div>
            
            <button className='button-header'>KAPCSOLAT</button>
        </div>
    )
}

export default Header