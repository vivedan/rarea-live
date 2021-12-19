import React, { useState, useEffect } from 'react';



function Footer(props) {

    const text = 'Click here to send your message!'+ '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0';

    const textArray = new Array(4).fill(text);
    
    const joinedText = textArray.join('');

    return (
        <div className="footer-wrapper">
            <div className="rareaLogo icon" onClick={() => props.setSlide("About")}/>
            <div className="listLogo icon" onClick={() => props.setSlide("List")}/>
            <div className="banner" onClick={() => props.setSlide("Input")}>
                {/* <p className="scrolling-text">{joinedText}</p> */}
                <p className="marquee">
                    <span>{joinedText} &nbsp;</span>
                </p>
                <p className="marquee marquee2">
                    <span>{joinedText} &nbsp;</span>
                </p>
            </div>
        </div>
    );
}

export default Footer;