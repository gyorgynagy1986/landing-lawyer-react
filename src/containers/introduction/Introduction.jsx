import React from 'react'
import './introduction.css';

import sectionCover from'../../assets/main-section-cover.jpg';
import sectionCoverEllipse from'../../assets/Ellipse.png';
import sectionCoverPolygon from'../../assets/Polygon.png';
import sectionCover2 from'../../assets/big-main-cover.png';
import libra1 from'../../assets/icon-gray.png';
import libra2 from'../../assets/icon-gray-rotated.png';





const Introduction = () => {
    return (
        <div id='intro' className='introduction'>
            <div className='introduction-container'>
                <div className='introduction-photo-container'>
                    <img className='introduction-coverPhoto' src = {sectionCover} width={350} height={775} alt="section cover" />
                    <img className='introduction-coverEllipse' src = {sectionCoverEllipse} width={50} height={50} alt="section cover" />
                    <img className='introduction-coverPolygon' src = {sectionCoverPolygon} width={50} height={50} alt="section cover" />
                </div>
                <div className='introduction-text-container'>
                    <div className='introduction-text-container-title'>SANYISZKÓPIA</div>
                    <div className='introduction-text-container-line'></div>
                    <div className='introduction-text-container-text'><span className='textBox-text-span'>Lorem ipsum dolor </span> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                    <img className='introduction-text-container-bildingCover' src= {sectionCover2} alt="#" />
                    <div className='introduction-text-container-text'><span className='textBox-text-span'>Lorem ipsum dolor </span> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                </div>
            </div>

            <div className='introduction-pageBreak'>
                <img src= { libra1 } width={60} height={39} alt="libraBreak" />
                <div className='introduction-pageBreak-line'></div>
                <img src= { libra2} width={60} height={39}  alt="libraBreak" />
            </div>
                
        </div>
    )
}

export default Introduction
