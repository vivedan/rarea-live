import React from 'react';



function Footer(props) {

    const message = props.language === "es" ? '¡Haz click aquí para dejar tu mensaje!' : 'Click here to send your message!';

    const message2 = props.language === "es" ? '¿Te has dado cuenta de que puedes navegar la escena?' : 'Did you know you can navigate the scene?';

    const spaces = '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0';

    const text = message + spaces + message2 + spaces;

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
                {/* <p className="marquee marquee2">
                    <span>{joinedText} &nbsp;</span>
                </p> */}
            </div>
        </div>
    );
}

export default Footer;