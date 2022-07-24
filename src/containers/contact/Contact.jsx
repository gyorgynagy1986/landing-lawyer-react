import React from 'react'
import './contact.css';
import infoboxCover from'../../assets/contact-cover-resized.png';
import infoboxCoverMobile from'../../assets/contact-cover-mobile.png';




const Contact = () => {
    return (
        <div className='contact' id='contact'>
            <div className='contact-space'></div>
            <div className='contact-container'>
                <div className='contact-form'>
                    <div className='contact-form-header'>Lépj velem &nbsp;&nbsp;kapcsolatba</div>
                    <form className="form">

                            <div className="form-name">

                                <label className='form-label' for="firstName">First name</label>
                                <input 
                                        type="text"
                                        name="firstName"
                                        className="form-input"
                                        placeholder="*Név"
                                        tabIndex="1"
                                />
                                <label className='form-label' for="telefonszam">Last name</label>
                                <input
                                        type="number"
                                        name="telefonszam"
                                        className="telefonszam"
                                        placeholder='Telefonszám'
                                        tabIndex="2"
                                />
                          
                                <label className='form-label' for="email">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="form-input"
                                    placeholder="*Email cím"
                                    tabIndex="3"
                                />
                                <label className='form-label' for="message">Message</label>

                                <textarea
                                placeholder="Üzenet"
                                className="message"
                                name="message"
                                />
                            
                             </div>
                            
                            <button type="submit" className="form-send">KÜLDÉS</button>

                    </form>
                </div>
                <div className='contact-infoBox'>
                    <div className='contact-infoBox-smallbox'> <div className='smallbox-line'><p><span className='textBox-text-span'>Lorem ipsum dolor </span> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. </p></div></div>
                    <img className='contact-infoBox-coverphoto' src= {infoboxCover} width={828} height={684} alt="coverphoto" />
                    <img className='contact-infoBox-coverphoto-mobile' src= {infoboxCoverMobile} width={600} height={463} alt="coverphoto" />
                </div>
            </div>
            <div className='contact-space-bottom'></div>

        </div>
    )
}

export default Contact