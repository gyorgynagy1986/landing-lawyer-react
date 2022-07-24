import React from 'react'
import Accordion from '../../components/accordion/Accordion';
import './services.css';
import iconLibra from'../../assets/icon-gold.png';

const Services = () => {
    return (
        
        <div id='services'  className='section-services'>
            <div className='services-container'>

                <div className='services-container-textbox'>
                    <div className='services-text'><span className='textBox-text-span'>Lorem ipsum dolor </span> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                                                   labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                                   laboris nisi ut aliquip ex ea commodo consequat. Nisi ut aliquip ex ea commodo consequat. nisi ut aliquip ex ea commodo consequat. nisi ut aliquip ex ea commodo.
                    </div>
                </div>
                
                <div className='services-container-accordion'>
                    <div className='services-header'>Szolgáltatások</div>
                    <div className='services-line'></div>
                    <img className='services-icon' src={iconLibra} width={55} height={40}  alt="libra" />
                    <Accordion />
                </div>



            </div>
        </div>
    )
}

export default Services