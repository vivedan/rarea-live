import React from 'react';

import Close from './Close';

function Welcome(props) {


    const text1 = "Rarea Studio is 6 months old! As the end of the year approaches, we wanted to celebrate the Holidays with all of you and create a space where we could all share our thoughts and best wishes regardless of the distance that may separate us. Help us shape our tree and leave your comment!"
    
    const text2 = 'Warmest wishes and Happy New Year,';

    const text3 = 'Rarea team';
    
    return (
        <div className="welcome-wrapper wrapper centered">
            <Close setSlide={props.setSlide}/>
            <div className="text-wrapper centered">
                <p className="aboutText">{text1}</p>
                <p className="aboutText">{text2}</p>
                <p className="aboutText">{text3}</p>
            </div>
        </div>
    );
}

export default Welcome;