import React from 'react';

import Close from './Close';

function Welcome(props) {


    const text1 = "Rarea Studio is 6 months old! As the end of the year approaches, we wanted to celebrate the Holidays with all of you and create a space where we could all share our thoughts and best wishes regardless of the distance that may separate us. Help us shape our tree and leave your comment!"
    
    const text2 = 'Warmest wishes and Happy New Year,';

    const text3 = 'Rarea team';

    const text4 = '*You can navigate the tree using your fingers on phone or mouse on your laptop desktop.';

    const text1ESP = "¡Rarea Studio cumple seis meses! Al llegar el fin de año, nos gustaría celebrar las fiestas con todos vosotros y crear un espacio donde juntos podamos compartir nuestros pensamientos y buenos deseos, independienemente de la distancia que nos pueda separar. ¡Ayúdanos a formar nuestro árbol y deja tu comentario!"
    
    const text2ESP = 'Felices fiestas y Feliz año nuevo,';

    const text3ESP = 'Equipo Rarea';

    const text4ESP = '*Puedes navegar el árbol usando los dedos en tu teléfono o el ratón en tu ordenador.';
    
    return (
        <div className="welcome-wrapper wrapper centered">
            <Close setSlide={props.setSlide}/>
            {props.language === "es" && <div className="text-wrapper centered">
                <p className="aboutText">{text1ESP}</p>
                <p className="aboutText">{text2ESP}</p>
                <p className="aboutText">{text3ESP}</p>
                <p className="pointer titles" onClick={() => props.setSlide("")}>Entrar</p>
                <p className="aboutText disclaimer">{text4ESP}</p>
            </div>}
            {props.language !== "es" && <div className="text-wrapper centered">
                <p className="aboutText">{text1}</p>
                <p className="aboutText">{text2}</p>
                <p className="aboutText">{text3}</p>
                <p className="pointer titles" onClick={() => props.setSlide("")}>Enter</p>
                <p className="aboutText disclaimer">{text4}</p>
            </div>}
        </div>
    );
}

export default Welcome;