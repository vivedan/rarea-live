import React from 'react';

import Close from './Close';

function About(props) {


    const text1 = "Rarea Studio is 6 months old! As the end of the year approaches, we wanted to celebrate the Holidays with all of you and create a space where we could all share our thoughts and best wishes regardless of the distance that may separate us. Help us shape our tree and leave your comment!"
    
    const text2 = 'Warmest wishes and Happy New Year,';

    const text3 = 'Rarea team';

    const text4 = '*No trees were harmed in the making of this Holiday Greeting.';
    
    const text5 = "RAREA is a partnership formed by Patricia Mascarell Llombart and Daniel Vera Villalobos, two Valencian architects based in London. In their practice, they seek and explore new methods to present elements of architectural research to an open audience, focusing primarily on the emotional connection between the built environment, the inhabitant, and the systems that bring them together, which they refer to as ‘invisible architecture’."

    const text1ESP = "¡Rarea Studio cumple seis meses! Al llegar el fin de año, nos gustaría celebrar las fiestas con todos vosotros y crear un espacio donde juntos podamos compartir nuestros pensamientos y buenos deseos, independientemente de la distancia que nos pueda separar. ¡Ayúdanos a formar nuestro árbol y deja tu comentario!"
    
    const text2ESP = 'Felices fiestas y Feliz año nuevo,';

    const text3ESP = 'Equipo Rarea';

    const text4ESP = '*Ningún árbol ha sido dañado en la producción de esta tarjeta.';
    
    const text5ESP = "RAREA es una sociedad formada por Patricia Mascarell Llombart y Daniel Vera Villalobos, dos arquitectos valencianos con sede en Londres. En sus proyectos, el equipo busca y explora nuevas formas de acercar elementos de investigación arquitéctonica a una audiencia abierta, con especial atención a la conexión emocional entre lo construido, el habitante y los sistemas que la hacen posible, a los que se refieren como 'arquitectura invisible'."


    return (
        <div className="about-wrapper wrapper centered">
            <Close setSlide={props.setSlide}/>
            {props.language === "es" && <div className="about-text-wrapper centered">
                <p className="aboutText">Síguenos en redes sociales:</p>
                <div className="SSMMCont">
                    <a href="https://www.instagram.com/rareastudio/" target="_blank"><div className="logoSSMM instagram" placeholder="instagram"></div></a>
                    <a href="https://twitter.com/RareaStudio" target="_blank"><div className="logoSSMM twitter" placeholder="twitter"></div></a>
                </div>
                <br></br>
                <p className="aboutText">{text1ESP}</p>
                <p className="aboutText">{text2ESP}</p>
                <p className="aboutText">{text3ESP}</p>
                {/* <p className="aboutText disclaimer">{text4ESP}</p> */}
                <div className="lineCont">
                    <div className="line centered"></div>
                </div>
                <p className="aboutText rareaDescription">{text5ESP}</p>
                
            </div>}
            {props.language !== "es" && <div className="about-text-wrapper centered">
                <p className="aboutText">Follow us on Social Media:</p>
                <div className="SSMMCont">
                    <a href="https://www.instagram.com/rareastudio/" target="_blank"><div className="logoSSMM instagram" placeholder="instagram"></div></a>
                    <a href="https://twitter.com/RareaStudio" target="_blank"><div className="logoSSMM twitter" placeholder="twitter"></div></a>
                </div>
                <br></br>
                <p className="aboutText">{text1}</p>
                <p className="aboutText">{text2}</p>
                <p className="aboutText">{text3}</p>
                {/* <p className="aboutText disclaimer">{text4}</p> */}
                <div className="lineCont">
                    <div className="line centered"></div>
                </div>
                <p className="aboutText rareaDescription">{text5}</p>
                
            </div>}
            
        </div>
    );
}

export default About;