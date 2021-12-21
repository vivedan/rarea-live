import React from 'react';

import Close from './Close';

function Welcome(props) {


    const text1 = "Rarea Studio is 6 months old! As the end of the year approaches, we wanted to celebrate the Holidays with all of you and create a space where we could all share our thoughts and best wishes regardless of the distance that may separate us. Help us shape our tree and leave your comment!"
    
    const text2 = 'Warmest wishes and Happy New Year,';

    const text3 = 'Rarea team';

    const text1ESP = "¡Rarea Studio cumple seis meses! Al llegar el fin de año, nos gustaría celebrar las fiestas con todos vosotros y crear un espacio donde juntos podamos compartir nuestros pensamientos y buenos deseos, independienemente de la distancia que nos pueda seprar. ¡Ayúdanos a formar nuestro árbol y deja tu comentario!"
    
    const text2ESP = 'Felices fiestas y Feliz año nuevo,';

    const text3ESP = 'Equipo Rarea';
    
    return (
        <div className="welcome-wrapper wrapper centered">
            <Close setSlide={props.setSlide}/>
            {props.language === "es" && <div className="text-wrapper centered">
                <p className="aboutText">{text1ESP}</p>
                <p className="aboutText">{text2ESP}</p>
                <p className="aboutText">{text3ESP}</p>
            </div>}
            {props.language !== "es" && <div className="text-wrapper centered">
                <p className="aboutText">{text1}</p>
                <p className="aboutText">{text2}</p>
                <p className="aboutText">{text3}</p>
            </div>}
        </div>
    );
}

export default Welcome;