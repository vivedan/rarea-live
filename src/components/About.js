import React from 'react';

import Close from './Close';

function About(props) {


    const text1 = "Rarea Studio is 6 months old! As the end of the year approaches, we wanted to celebrate the Holidays with all of you and create a space where we could all share our thoughts and best wishes regardless of the distance that may separate us. Help us shape our tree and leave your comment!"
    
    const text2 = 'Warmest wishes and Happy New Year,';

    const text3 = 'Rarea team';

    const text4 = '*No trees were harmed in the making of this Holiday Greeting.';
    
    const text5 = "RAREA is a partnership formed by Patricia Mascarell Llombart and Daniel Vera Villalobos, two Valencian architects based in London. In their practice, they seek and explore new methods to present research and focus on the connection between the built environment and the inhabitant, which they call ‘invisible architecture’."

    const text1ESP = "¡Rarea Studio cumple seis meses! Al llegar el fin de año, nos gustaría celebrar las fiestas con todos vosotros y crear un espacio donde juntos podamos compartir nuestros pensamientos y buenos deseos, independienemente de la distancia que nos pueda seprar. ¡Ayúdanos a formar nuestro árbol y deja tu comentario!"
    
    const text2ESP = 'Felices fiestas y Feliz año nuevo,';

    const text3ESP = 'Equipo Rarea';

    const text4ESP = '*Ningún árbol ha sido dañado en la producción de esta tarjeta.';
    
    const text5ESP = "RAREA es una sociedad formada por Patricia Mascarell Llombart y Daniel Vera Villalobos, dos arquitectos valencianos con sede en Londres. En sus proyectos, buscan y exploran nuevas formas de presentar investigación y ponen su atención en la conexión entre lo construido y el habitante, a la que se refieren como 'arquitectura invisible'."


    return (
        <div className="about-wrapper wrapper centered">
            <Close setSlide={props.setSlide}/>
            {props.language === "es" && <div className="about-text-wrapper centered">
                <p className="aboutText">{text1ESP}</p>
                <p className="aboutText">{text2ESP}</p>
                <p className="aboutText">{text3ESP}</p>
                <p className="aboutText disclaimer">{text4ESP}</p>
                <div className="lineCont">
                    <div className="line centered"></div>
                </div>
                <p className="aboutText rareaDescription">{text5ESP}</p>
            </div>}
            {props.language !== "es" && <div className="about-text-wrapper centered">
                <p className="aboutText">{text1}</p>
                <p className="aboutText">{text2}</p>
                <p className="aboutText">{text3}</p>
                <p className="aboutText disclaimer">{text4}</p>
                <div className="lineCont">
                    <div className="line centered"></div>
                </div>
                <p className="aboutText rareaDescription">{text5}</p>
            </div>}
        </div>
    );
}

export default About;