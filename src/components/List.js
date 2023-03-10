import React from 'react';

import Close from './Close';

function List(props) {
    return (
        <div className="list-wrapper wrapper centered">
            <Close setSlide={props.setSlide}/>
            <div className="listCont centered">
                {props.language === "es" && <p className="titles">Historial de comentarios:</p>}
                {props.language !== "es" && <p className="titles">Comment history:</p>}
                {props.comments && props.comments.map(comment => (
                    <p key={Math.random()} className="listItems">{comment}</p>
                ))}
            </div>
        </div>
    );
}

export default List;